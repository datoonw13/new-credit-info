import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {BaseHeader, Text, PersonalDataInput, Button} from 'components';
import useUpdatePersonalData from './useUpdatePersonalData';
import {rules} from 'utils/form';

const UpdatePersonalData = () => {
  const {
    onSaveButtonPress,
    emailVerified,
    phoneVerified,
    handleSubmit,
    isPerson,
    control,
    errors,
  } = useUpdatePersonalData();
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <BaseHeader />
        <Text style={styles.title}>{t('updatePersonalData.title')}</Text>

        <Controller
          name="username"
          control={control}
          render={({onBlur, onChange, value}) => (
            <PersonalDataInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="registration.personalNumber"
              errorMessage={errors.username?.message}
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
              errorMessage={errors.firstName?.message}
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
              errorMessage={errors.lastName?.message}
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
              label="registration.birthDate"
              errorMessage={errors.birthDate?.message}
            />
          )}
          rules={rules.required()}
        />

        <Text style={[styles.title, styles.marginTop10]}>
          {t('updatePersonalData.contact')}
        </Text>

        <Controller
          name="phoneNumber"
          control={control}
          render={({onBlur, onChange, value}) => (
            <PersonalDataInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="registration.phone"
              errorMessage={errors.phoneNumber?.message}
              verified={phoneVerified}
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
              errorMessage={errors.email?.message}
              verified={emailVerified}
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
              label="registration.country"
              errorMessage={errors.country?.message}
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
              errorMessage={errors.address?.message}
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
