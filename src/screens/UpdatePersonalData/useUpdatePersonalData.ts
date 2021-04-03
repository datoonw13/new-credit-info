import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUser} from 'store/select';
import * as services from 'services';
import {alertSuccess, alertWarning} from 'utils/dropdownAlert';
import {formatDate, reverseFormatDate} from 'utils/calendar';

const useUpdatePersonalData = () => {
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
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
  const [dateModalVisible, setDateModalVisible] = useState(false);

  const user = useSelector(selectUser);

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
    }
  }, [user, setValue]);

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

    try {
      await services.updateProfileData({
        personalCode: userName,
        name: firstName,
        lastName,
        address,
        birthDate,
        countryId: user?.countryId || 1,
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
    setDateModalVisible,
    onPhoneVerifyPress,
    onEmailVerifyPress,
    onSaveButtonPress,
    dateModalVisible,
    emailVerified,
    phoneVerified,
    onDateSelect,
    handleSubmit,
    customerType,
    dateOfBirth,
    isPerson,
    control,
    errors,
  };
};

export default useUpdatePersonalData;
