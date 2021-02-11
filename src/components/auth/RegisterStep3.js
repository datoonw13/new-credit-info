import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import AuthSubmitButton from './AuthSubmitButton';
import {Divider} from 'react-native-elements';
import {translate} from '../../services/localizeService';
import {useDispatch, useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import CusInput from '../shared/CusInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GRAY8} from '../../theme/colors';
import {
  getCostumerInfoAction,
  getCountriesAction,
  setCustomerExtraAction,
  setRegisterSelectedStepAction,
} from '../../store/ducks/authDuck';
import CalendarModal from './CalendarModal';
import CountrySelectModal from './CountrySelectModal';

const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

const RegisterStep3 = ({lastStep, registerData, isPerson}) => {
  const dispatch = useDispatch();
  const {countries} = useSelector((state) => state.authReducer);
  const [calendarModalVisible, setCalendarModalVisible] = React.useState(false);
  const [countryModalVisible, setCountryModalVisible] = React.useState(false);
  const [activeDate, setActiveDate] = React.useState(null);
  const [activeCountry, setActiveCountry] = React.useState({
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

  React.useEffect(() => {
    if (lastStep !== 3) {
      if (registerData.address) {
        setValue('email', registerData.email);
        setValue('address', registerData.address);
        setValue('birthDate', registerData.birthDate);
        setValue('country', registerData.country);
      } else {
        dispatch(getCostumerInfoAction(1));
      }
    }
    if (lastStep === 3 && countries.length === 0) {
      dispatch(getCountriesAction());
    }
    if (lastStep === 3 && countries.length !== 0 && activeCountry.id === null) {
      const country = countries.find((el) => el.alpha2Code === 'GE');
      setActiveCountry(country);
      setValue('country', country.name);
      trigger('country').done();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, countries, registerData]);

  const onSubmit = (data) => {
    if (lastStep === 3) {
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

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Controller
            name="email"
            control={control}
            render={({onChange, onBlur, value}) => (
              <CusInput
                placeholder={
                  translate('EMAIL') + ' (' + translate('NOT_REQUIRED') + ')'
                }
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                maxLength={35}
                errorMessage={errors.email && translate('VALID_EMAIL')}
                label={translate('EMAIL')}
                editable={lastStep === 3}
              />
            )}
            rules={{
              required: false,
              pattern: expression,
            }}
          />
          <Controller
            name="birthDate"
            control={control}
            render={({onChange, onBlur, value}) => (
              <CusInput
                placeholder={translate('BIRTH_DATE')}
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                maxLength={35}
                errorMessage={errors.birthDate && translate('VALID_BIRTH_DATE')}
                label={translate('BIRTH_DATE')}
                editable={false}
                inputPressHandler={() => {
                  console.log(lastStep);
                  lastStep === 3 ? setCalendarModalVisible(true) : null;
                }}
                pointerEvents="none"
                rightIcon={
                  <MaterialIcons
                    size={32}
                    color={GRAY8}
                    name="keyboard-arrow-down"
                  />
                }
              />
            )}
            rules={{
              required: true,
            }}
          />
          <Controller
            name="country"
            control={control}
            render={({onChange, onBlur, value}) => (
              <CusInput
                placeholder={translate('COUNTRY')}
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                maxLength={35}
                errorMessage={errors.country && translate('VALID_COUNTRY')}
                label={translate('SELECT_COUNTRY')}
                editable={false}
                inputPressHandler={
                  lastStep === 3 ? () => setCountryModalVisible(true) : null
                }
                pointerEvents="none"
                rightIcon={
                  <MaterialIcons
                    size={32}
                    color={GRAY8}
                    name="keyboard-arrow-down"
                  />
                }
              />
            )}
            rules={{
              required: true,
            }}
          />
          <Controller
            name="address"
            control={control}
            render={({onChange, onBlur, value}) => (
              <CusInput
                placeholder={translate('ADDRESS')}
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                maxLength={35}
                errorMessage={errors.address && translate('VALID_ADDRESS')}
                label={translate('ADDRESS')}
                editable={lastStep === 3}
              />
            )}
            rules={{
              required: true,
            }}
          />
        </ScrollView>
        <Divider />
        <AuthSubmitButton
          text={'CONTINUE'}
          onPress={() =>
            lastStep === 3 ? handleSubmit(onSubmit)() : onSubmit()
          }
        />
      </View>
      <CalendarModal
        isVisible={calendarModalVisible}
        setModalVisible={setCalendarModalVisible}
        setDate={updateBirthDay}
        activeDate={activeDate}
        isPerson={isPerson}
      />
      <CountrySelectModal
        isVisible={countryModalVisible}
        setModalVisible={setCountryModalVisible}
        setCountry={updateCountry}
        activeCountry={activeCountry}
        countries={countries}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
});

export default RegisterStep3;
