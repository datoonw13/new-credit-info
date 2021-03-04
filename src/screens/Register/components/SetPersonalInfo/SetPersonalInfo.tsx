import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import {Controller} from 'react-hook-form';
import {Input, Button} from 'components';
import useSetPersonalInfo from './useSetPersonalInfo';
import {RegistrationSteps} from '../RegistrationStep/enum';
import {useTranslation} from 'react-i18next';

const SetPersonalInfo: SetPersonalInfoFC = ({
  lastStep,
  registerData,
  isPerson,
}) => {
  const {onSubmit, control, errors, handleSubmit, watch} = useSetPersonalInfo({
    lastStep,
    registerData,
  });
  const {i18n, t} = useTranslation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Controller
          name="userName"
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              label={
                isPerson
                  ? 'registration.personalNumber'
                  : 'registration.identificationCode'
              }
              editable={lastStep === RegistrationSteps.SetPersonalInfo}
              keyboardType="number-pad"
              onChangeText={(val) => onChange(val)}
              onBlur={onBlur}
              value={value}
              maxLength={isPerson ? 11 : 9}
              errorMessage={
                errors.userName &&
                t(
                  isPerson
                    ? 'registration.validPersonalNumber'
                    : 'registration.validIdentificationCode',
                )
              }
              labelOnBorderToo
            />
          )}
          rules={{
            required: true,
            minLength: isPerson ? 11 : 9,
            pattern: /^\d*$/,
          }}
        />
        <Divider />
        <Controller
          name="repeatUserName"
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              label={
                isPerson
                  ? 'registration.repeatPersonalNumber'
                  : 'registration.repeatIdentificationCode'
              }
              editable={lastStep === RegistrationSteps.SetPersonalInfo}
              keyboardType="number-pad"
              onChangeText={(val) => onChange(val)}
              onBlur={onBlur}
              value={value}
              maxLength={isPerson ? 11 : 9}
              errorMessage={
                errors.repeatUserName &&
                t(
                  isPerson
                    ? 'registration.validRepeatPersonalNumber'
                    : 'registration.validRepeatIdentificationCode',
                )
              }
            />
          )}
          rules={{
            required: true,
            validate: (value) => value === watch('userName'),
          }}
        />
        <Divider />
        <Controller
          name="firstName"
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              label={isPerson ? 'registration.firstName' : 'registration.name'}
              editable={lastStep === 2}
              onChangeText={(val) => onChange(val)}
              onBlur={onBlur}
              value={value}
              maxLength={35}
              errorMessage={
                errors.firstName &&
                t(
                  isPerson
                    ? 'registration.validFirstName'
                    : 'registration.validName',
                )
              }
              autoCorrect={false}
            />
          )}
          rules={{
            required: true,
            pattern: i18n.language === 'ka' ? /^[ა-ჰ]*$/ : /^[A-Za-z]*$/,
          }}
        />
        <Divider />
        {isPerson ? (
          <Controller
            name="lastName"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                label="registration.lastName"
                editable={lastStep === 2}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={35}
                errorMessage={
                  errors.lastName && t('registration.validLastName')
                }
                autoCorrect={false}
              />
            )}
            rules={{
              required: true,
              pattern: i18n.language === 'ka' ? /^[ა-ჰ]*$/ : /^[A-Za-z]*$/,
            }}
          />
        ) : null}
      </ScrollView>
      <Divider />
      <Button
        text="continue"
        onPress={() =>
          lastStep === RegistrationSteps.SetPersonalInfo
            ? handleSubmit(onSubmit)()
            : onSubmit()
        }
      />
    </View>
  );
};
export default SetPersonalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  scrollViewContainer: {
    paddingTop: 10,
  },
});
