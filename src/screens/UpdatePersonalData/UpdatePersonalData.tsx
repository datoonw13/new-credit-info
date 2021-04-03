import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {
  CountrySelectModal,
  DateSelectorModal,
  PersonalDataInput,
  BaseHeader,
  Button,
  Text,
} from 'components';
import {useErrorMessage} from 'hooks';
import useUpdatePersonalData from './useUpdatePersonalData';
import {rules} from 'utils/form';

const UpdatePersonalData = () => {
  const {
    setCountriesModalVisible,
    countriesModalVisible,
    setDateModalVisible,
    onPhoneVerifyPress,
    onEmailVerifyPress,
    onSaveButtonPress,
    setActiveCountry,
    dateModalVisible,
    activeCountry,
    emailVerified,
    phoneVerified,
    onDateSelect,
    handleSubmit,
    dateOfBirth,
    countries,
    isPerson,
    control,
    errors,
  } = useUpdatePersonalData();
  const {t} = useTranslation();

  const {
    userNameErrorMsg,
    firstNameErrorMsg,
    lastNameErrorMsg,
    birthDateErrorMsg,
    phoneErrorMsg,
    countryErrorMsg,
    addressErrorMsg,
    emailErrorMsg,
  } = useErrorMessage(errors);

  return (
    <SafeAreaView style={styles.container}>
      <BaseHeader />
      <KeyboardAvoidingView behavior="padding">
        <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
          <Text style={styles.title}>{t('updatePersonalData.title')}</Text>
          <Controller
            name="userName"
            control={control}
            render={({onBlur, onChange, value}) => (
              <PersonalDataInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                label="registration.personalNumber"
                errorMessage={userNameErrorMsg(isPerson)}
              />
            )}
            rules={rules.userName(isPerson)}
          />

          <Controller
            name="firstName"
            control={control}
            render={({onBlur, onChange, value}) => (
              <PersonalDataInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                label="registration.firstName"
                errorMessage={firstNameErrorMsg(isPerson)}
              />
            )}
            rules={rules.nameField()}
          />

          <Controller
            name="lastName"
            control={control}
            render={({onBlur, onChange, value}) => (
              <PersonalDataInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                label="registration.lastName"
                errorMessage={lastNameErrorMsg()}
              />
            )}
            rules={rules.nameField()}
          />

          <Controller
            name="birthDate"
            control={control}
            render={({onBlur, onChange, value}) => (
              <PersonalDataInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                editable={false}
                label="registration.birthDate"
                errorMessage={birthDateErrorMsg(isPerson)}
                inputPressHandler={() => setDateModalVisible(true)}
              />
            )}
            rules={rules.required()}
          />

          <Text style={[styles.title, styles.marginTop10]}>
            {t('updatePersonalData.contact')}
          </Text>

          <Controller
            name="phone"
            control={control}
            render={({onBlur, onChange, value}) => (
              <PersonalDataInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                label="registration.phone"
                errorMessage={phoneErrorMsg()}
                verified={phoneVerified}
                onVerifyPress={onPhoneVerifyPress}
              />
            )}
            rules={rules.phone()}
          />

          <Controller
            name="email"
            control={control}
            render={({onBlur, onChange, value}) => (
              <PersonalDataInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                label="registration.email"
                errorMessage={emailErrorMsg()}
                verified={emailVerified}
                onVerifyPress={onEmailVerifyPress}
              />
            )}
            rules={rules.email()}
          />

          <Controller
            name="country"
            control={control}
            render={({onBlur, onChange, value}) => (
              <PersonalDataInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                editable={false}
                label="registration.country"
                errorMessage={countryErrorMsg()}
                inputPressHandler={() => setCountriesModalVisible(true)}
              />
            )}
            rules={rules.required()}
          />

          <Controller
            name="address"
            control={control}
            render={({onBlur, onChange, value}) => (
              <PersonalDataInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                label="registration.address"
                errorMessage={addressErrorMsg()}
              />
            )}
            rules={rules.required()}
          />
          <Button
            onPress={handleSubmit(onSaveButtonPress)}
            touchableStyle={styles.saveButton}
            text="save"
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <DateSelectorModal
        activeDate={dateOfBirth}
        isPerson={isPerson}
        setDate={onDateSelect}
        dateSelectorVisible={dateModalVisible}
        setDateSelectorVisible={setDateModalVisible}
      />
      <CountrySelectModal
        activeCountry={activeCountry}
        setCountry={setActiveCountry}
        isVisible={countriesModalVisible}
        setModalVisible={setCountriesModalVisible}
        countries={countries}
      />
    </SafeAreaView>
  );
};

export default UpdatePersonalData;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  scrollViewContentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 20,
    marginBottom: 30,
  },
  marginTop10: {
    marginTop: 50,
  },
  saveButton: {
    marginVertical: 30,
  },
});
