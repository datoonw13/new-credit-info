import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {selectUser} from 'store/select';

const useUpdatePersonalData = () => {
  const {control, errors, handleSubmit, setValue, getValues} = useForm({
    defaultValues: {
      username: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      phoneNumber: '',
      email: '',
      country: '',
      address: '',
    },
  });

  const [customerType, setCustomerType] = useState<Entity>('PERSON');
  const [emailVerified, setEmailVerified] = useState(true);
  const [phoneVerified, setPhoneVerified] = useState(true);

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
      setValue('username', personalCode);
      setValue('firstName', name);
      setValue('lastName', lastName);
      setValue('birthDate', birthDate);
      setValue('phoneNumber', mobileNumber);
      setValue('email', email);
      setValue('country', country);
      setValue('address', address);
      setCustomerType(fetchedCustomerType);
      setEmailVerified(fetchedEmailVerified);
      setPhoneVerified(mobileNumberVerified);
    }
  }, [user, setValue]);

  /**
   * Save data on save button press.
   */
  const onSaveButtonPress = () => {
    const data = getValues();
    console.log({data});
  };

  /**
   * Determine if user is individual entity.
   */
  const isPerson = customerType === 'PERSON';

  return {
    onSaveButtonPress,
    emailVerified,
    phoneVerified,
    handleSubmit,
    customerType,
    isPerson,
    control,
    errors,
  };
};

export default useUpdatePersonalData;
