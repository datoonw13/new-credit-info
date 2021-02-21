import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCostumerInfoAction,
  getCountriesAction,
  setCustomerExtraAction,
  setRegisterSelectedStepAction,
} from 'store/ducks/authDuck';

const useSetAdditionalInfo = ({
  registerData,
  lastStep,
}: SetAdditionalInfoProps) => {
  const dispatch = useDispatch();
  const {countries} = useSelector((state) => state.authReducer);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [activeDate, setActiveDate] = useState(null);
  const [activeCountry, setActiveCountry] = useState({
    id: null,
    name: '',
  });
  const {control, handleSubmit, errors, setValue, trigger} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: registerData.email ? registerData.email : '',
      address: registerData.address ? registerData.address : '',
      birthDate: registerData.birthDate ? registerData.birthDate : '',
      country: registerData.country ? registerData.country : '',
    },
  });

  useEffect(() => {
    if (lastStep !== 4) {
      if (registerData.address) {
        setValue('email', registerData.email);
        setValue('address', registerData.address);
        setValue('birthDate', registerData.birthDate);
        setValue('country', registerData.country);
      } else {
        dispatch(getCostumerInfoAction(1));
      }
    }
    if (lastStep === 4 && countries.length === 0) {
      dispatch(getCountriesAction());
    }
    if (lastStep === 4 && countries.length !== 0 && activeCountry.id === null) {
      const country = countries.find((el) => el.alpha2Code === 'GE');
      setActiveCountry(country);
      setValue('country', country.name);
      trigger('country').done();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, countries, registerData]);

  const onSubmit = (data = {}) => {
    if (lastStep === 4) {
      dispatch(
        setCustomerExtraAction({
          ...data,
          countryId: activeCountry.id,
        }),
      );
    } else {
      dispatch(setRegisterSelectedStepAction(4));
    }
  };

  const updateBirthDay = (date) => {
    setCalendarModalVisible(false);
    setActiveDate(date);
    setValue('birthDate', date.split('-').reverse().join('/'));
    trigger('birthDate').done();
  };

  const updateCountry = (country) => {
    setCountryModalVisible(false);
    setActiveCountry(country);
    setValue('country', country.name);
    trigger('country').done();
  };

  return {
    setCalendarModalVisible,
    setCountryModalVisible,
    calendarModalVisible,
    countryModalVisible,
    updateBirthDay,
    updateCountry,
    activeCountry,
    handleSubmit,
    activeDate,
    countries,
    onSubmit,
    control,
    errors,
  };
};

export default useSetAdditionalInfo;