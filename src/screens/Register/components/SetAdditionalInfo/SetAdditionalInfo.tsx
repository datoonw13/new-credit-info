import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import {Controller} from 'react-hook-form';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GRAY8} from 'theme/colors';
import {CountrySelectModal, Input, Button, DateSelectorModal} from 'components';
import {expression} from './config';
import useSetAdditionalInfo from './useSetAdditionalInfo';
import {useTranslation} from 'react-i18next';

const SetAdditionalInfo: SetAdditionalInfoFC = ({
  lastStep,
  registerData,
  isPerson,
}) => {
  const {
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
  } = useSetAdditionalInfo({lastStep, registerData});
  const {t} = useTranslation();
  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Controller
            name="birthDate"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                label={
                  isPerson
                    ? 'registration.birthDate'
                    : 'registration.dateOfFoundation'
                }
                editable={false}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={35}
                errorMessage={
                  errors.birthDate &&
                  t(
                    isPerson
                      ? 'registration.validBirthDate'
                      : 'registration.validDateOfFoundation',
                  )
                }
                pointerEvents="none"
                rightIcon={
                  <MaterialIcons
                    size={32}
                    color={GRAY8}
                    name="keyboard-arrow-down"
                  />
                }
                inputPressHandler={() =>
                  lastStep === 4 ? setCalendarModalVisible(true) : null
                }
              />
            )}
            rules={{required: true}}
          />
          <Divider />
          <Controller
            name="country"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                label="registration.country"
                editable={false}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={35}
                errorMessage={errors.country && t('registration.validCountry')}
                inputPressHandler={
                  lastStep === 4
                    ? () => setCountryModalVisible(true)
                    : undefined
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
          <Divider />
          <Controller
            name="address"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                label="registration.address"
                editable={lastStep === 4}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={35}
                errorMessage={errors.address && t('registration.validAddress')}
                autoCorrect={false}
              />
            )}
            rules={{
              required: true,
            }}
          />
          <Divider />
          <Controller
            name="email"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                label="registration.email"
                editable={lastStep === 4}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={35}
                errorMessage={errors.email && t('registration.validEmail')}
                labelOnBorderToo
                notRequired
              />
            )}
            rules={{
              required: false,
              pattern: expression,
            }}
          />
        </ScrollView>
        <Divider />
        <Button
          text="continue"
          onPress={() =>
            lastStep === 4 ? handleSubmit(onSubmit)() : onSubmit()
          }
        />
      </View>
      <DateSelectorModal
        dateSelectorVisible={calendarModalVisible}
        setDateSelectorVisible={setCalendarModalVisible}
        setDate={updateBirthDay}
        activeDate={activeDate}
        isPerson={!!isPerson}
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

export default SetAdditionalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  scrollViewContainer: {
    paddingTop: 10,
  },
});
