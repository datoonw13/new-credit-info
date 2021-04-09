import {createRef, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUser} from 'store/select';
import * as services from 'services';
import {alertSuccess, alertWarning} from 'utils/dropdownAlert';
import {formatDate, reverseFormatDate} from 'utils/calendar';
import {VerifyModal} from 'components';
import {isEmailCodeInvalid} from './helpers';

const useUpdatePersonalData = () => {
  const user = useSelector(selectUser);

  const {
    control,
    errors,
    handleSubmit,
    setValue,
    getValues,
    watch,
    trigger,
  } = useForm({
    defaultValues: {
      userName: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      phone: '',
      email: '',
      country: '',
      address: '',
    },
  });

  const [customerType, setCustomerType] = useState<Entity>('PERSON');
  const [emailVerified, setEmailVerified] = useState(true);
  const [phoneVerified, setPhoneVerified] = useState(true);
  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());
  const [activeCountry, setActiveCountry] = useState<Country>();
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [countriesModalVisible, setCountriesModalVisible] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);

  const verifyPhoneModalRef = createRef<VerifyModal>();
  const verifyEmailModalRef = createRef<VerifyModal>();

  /**
   * Set user data for the form.
   */
  useEffect(() => {
    if (user !== undefined) {
      const {
        personalCode,
        name,
        lastName,
        birthDate,
        mobileNumber,
        email,
        country,
        address,
        customerType: fetchedCustomerType,
        emailVerified: fetchedEmailVerified,
        mobileNumberVerified,
        countryId,
      } = user;
      setValue('userName', personalCode);
      setValue('firstName', name);
      setValue('lastName', lastName);
      setValue('birthDate', birthDate);
      setValue('phone', mobileNumber);
      setValue('email', email || '');
      setValue('country', country);
      setValue('address', address);
      setCustomerType(fetchedCustomerType);
      setEmailVerified(fetchedEmailVerified);
      setPhoneVerified(mobileNumberVerified);

      setDateOfBirth(reverseFormatDate(birthDate));
      const foundCountry = countries.find(({id}) => id === countryId);
      if (foundCountry) {
        setActiveCountry(foundCountry);
      }
    }
  }, [user, setValue, countries]);

  /**
   * Fetch countries.
   */
  useEffect(() => {
    const fetchCountries = async () => {
      const fetchedCountries = await services.getCountries();
      setCountries(fetchedCountries);
    };

    if (user) {
      fetchCountries();
    }
  }, [user]);

  /**
   * Watch email verified option.
   */
  useEffect(() => {
    if (user?.emailVerified === true && watch('email') === user?.email) {
      setEmailVerified(true);
    } else {
      setEmailVerified(false);
    }
  }, [user?.email, user?.emailVerified, watch]);

  /**
   * Watch mobile verified option.
   */
  useEffect(() => {
    if (
      user?.mobileNumberVerified === true &&
      watch('phone') === user?.mobileNumber
    ) {
      setPhoneVerified(true);
    } else {
      setPhoneVerified(false);
    }
  }, [user?.mobileNumber, user?.mobileNumberVerified, watch]);

  /**
   * Watch country selection and update form state.
   */
  useEffect(() => {
    const countryId = countries.find(({id}) => id === activeCountry?.id)?.id;
    if (countryId) {
      setValue('country', activeCountry?.name);
      trigger('country');
    }
  }, [countries, activeCountry, setValue, trigger]);

  /**
   * Show verify phone modal.
   */
  const showVerifyPhoneModal = () => {
    verifyPhoneModalRef.current?.show();
  };

  /**
   * Verify phone number if phone is correct.
   */
  const onPhoneVerifyPress = async (code: string) => {
    const result = await trigger('phone');

    if (result) {
      Alert.alert('Not yet implemented!');
    }
  };

  /**
   * Show verify email modal.
   */
  const showVerifyEmailModal = async () => {
    const emailVerifiedModal = verifyEmailModalRef.current;
    const result = await trigger('email');
    if (result) {
      const email = getValues('email');
      try {
        await services.sendEmailVerificationCode(email);
        emailVerifiedModal?.clear();
        emailVerifiedModal?.show();
      } catch (e) {}
    }
  };

  /**
   * Verify phone number if phone is correct.
   */
  const onEmailVerifyPress = async (code: string) => {
    const result = await trigger('email');
    const emailVerifiedModal = verifyEmailModalRef.current;

    if (isEmailCodeInvalid(code)) {
      alertWarning('', 'modal.correctCode');
      emailVerifiedModal?.clear();
      return;
    }

    if (result) {
      try {
        emailVerifiedModal?.hide();
        emailVerifiedModal?.clear();
        await services.verifyEmail(code);
        alertSuccess('', 'modal.verifyEmailSuccess');
      } catch (e) {
        alertWarning('', 'modal.verifyEmailFailure');
      }
    }
  };

  /**
   * Select date and update form state.
   */
  const onDateSelect = (date: Date) => {
    setDateOfBirth(date);
    setValue('birthDate', formatDate(date));
    trigger('birthDate');
  };

  /**
   * Save data on save button press.
   */
  const onSaveButtonPress = async () => {
    const {
      userName,
      firstName,
      lastName,
      address,
      birthDate,
      phone,
      email,
    } = getValues();
    console.log(activeCountry);
    try {
      await services.updateProfileData({
        personalCode: userName,
        name: firstName,
        lastName,
        address,
        birthDate,
        countryId: activeCountry?.id || 1,
        emailNotificationEnabled: user?.emailNotificationEnabled || false,
        mobileNotificationEnabled: user?.mobileNotificationEnabled || false,
        mobileNumber: phone,
        email,
      });

      alertSuccess('', 'updatePersonalData.updateSuccess');
    } catch (e) {
      alertWarning('', 'updatePersonalData.updateError');
    }
  };

  /**
   * Determine if user is individual entity.
   */
  const isPerson = customerType === 'PERSON';

  return {
    setCountriesModalVisible,
    countriesModalVisible,
    showVerifyPhoneModal,
    showVerifyEmailModal,
    setDateModalVisible,
    verifyPhoneModalRef,
    verifyEmailModalRef,
    onPhoneVerifyPress,
    onEmailVerifyPress,
    onSaveButtonPress,
    dateModalVisible,
    setActiveCountry,
    activeCountry,
    emailVerified,
    phoneVerified,
    onDateSelect,
    handleSubmit,
    customerType,
    dateOfBirth,
    countries,
    isPerson,
    control,
    errors,
  };
};

export default useUpdatePersonalData;
