import {createRef, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUser} from 'store/select';
import * as services from 'services';
import {alertSuccess, alertWarning} from 'utils/dropdownAlert';
import {formatDate, reverseFormatDate} from 'utils/calendar';
import {VerifyPhoneModal} from 'components';

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

  const verifyModalRef = createRef<VerifyPhoneModal>();

  useEffect(() => {
    verifyModalRef.current?.show();
  }, [verifyModalRef]);

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
   * Verify phone number if phone is correct.
   */
  const onPhoneVerifyPress = async () => {
    const result = await trigger('phone');

    if (result) {
      Alert.alert('Not yet implemented!');
    }
  };

  /**
   * Verify phone number if phone is correct.
   */
  const onEmailVerifyPress = async () => {
    const result = await trigger('email');

    if (result) {
      Alert.alert('Not yet implemented!');
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
    setDateModalVisible,
    onPhoneVerifyPress,
    onEmailVerifyPress,
    onSaveButtonPress,
    dateModalVisible,
    setActiveCountry,
    verifyModalRef,
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
