import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import {Controller} from 'react-hook-form';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GRAY8} from 'theme/colors';
import {CalendarModal, CountrySelectModal, Input, Button} from 'components';
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
                label={'BIRTH_DATE'}
                editable={false}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={35}
                errorMessage={errors.birthDate && t('VALID_BIRTH_DATE')}
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
            rules={{
              required: true,
            }}
          />
          <Divider />
          <Controller
            name="country"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                label={'COUNTRY'}
                editable={false}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={35}
                errorMessage={errors.country && t('VALID_COUNTRY')}
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
                label={'ADDRESS'}
                editable={lastStep === 4}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={35}
                errorMessage={errors.address && t('VALID_ADDRESS')}
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
                label={'EMAIL'}
                editable={lastStep === 4}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={35}
                errorMessage={errors.email && t('VALID_EMAIL')}
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
          text={'CONTINUE'}
          onPress={() =>
            lastStep === 4 ? handleSubmit(onSubmit)() : onSubmit()
          }
        />
      </View>
      <CalendarModal
        isVisible={calendarModalVisible}
        setModalVisible={setCalendarModalVisible}
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
