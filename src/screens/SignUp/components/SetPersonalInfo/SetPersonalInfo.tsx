import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import {translate} from 'services/localizeService';
import {Controller} from 'react-hook-form';
import i18n from 'i18n-js';
import {Input, Button} from 'components';
import useSetPersonalInfo from './useSetPersonalInfo';
import {RegistrationSteps} from 'screens/SignUp/enum';

const SetPersonalInfo: SetPersonalInfoFC = ({
  lastStep,
  registerData,
  isPerson,
}) => {
  const {onSubmit, control, errors, handleSubmit, watch} = useSetPersonalInfo({
    lastStep,
    registerData,
  });
  console.log(errors);
  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Controller
            name="userName"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                label={isPerson ? 'PERSONAL_NUMBER' : 'IDENTIFICATION_CODE'}
                editable={lastStep === RegistrationSteps.SetPersonalInfo}
                keyboardType="number-pad"
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={isPerson ? 11 : 9}
                errorMessage={
                  errors.userName &&
                  translate(
                    isPerson
                      ? 'VALID_PERSONAL_NUMBER'
                      : 'VALID_IDENTIFICATION_CODE',
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
                    ? 'REPEAT_PERSONAL_NUMBER'
                    : 'REPEAT_IDENTIFICATION_CODE'
                }
                editable={lastStep === RegistrationSteps.SetPersonalInfo}
                keyboardType="number-pad"
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={isPerson ? 11 : 9}
                errorMessage={
                  errors.repeatUserName &&
                  translate(
                    isPerson
                      ? 'VALID_REPEAT_PERSONAL_NUMBER'
                      : 'VALID_REPEAT_IDENTIFICATION_CODE',
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
                label={'FIRST_NAME'}
                editable={lastStep === 2}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={35}
                errorMessage={errors.firstName && translate('VALID_FIRST_NAME')}
              />
            )}
            rules={{
              required: true,
              pattern: i18n.locale === 'ka' ? /^[ა-ჰ]*$/ : /^[A-Za-z]*$/,
            }}
          />
          <Divider />
          {isPerson ? (
            <Controller
              name="lastName"
              control={control}
              render={({onChange, onBlur, value}) => (
                <Input
                  label={'LAST_NAME'}
                  editable={lastStep === 2}
                  onChangeText={(val) => onChange(val)}
                  onBlur={onBlur}
                  value={value}
                  maxLength={35}
                  errorMessage={errors.lastName && translate('VALID_LAST_NAME')}
                />
              )}
              rules={{
                required: true,
                pattern: i18n.locale === 'ka' ? /^[ა-ჰ]*$/ : /^[A-Za-z]*$/,
              }}
            />
          ) : null}
        </ScrollView>
        <Divider />
        <Button
          text={'CONTINUE'}
          onPress={() =>
            lastStep === RegistrationSteps.SetPersonalInfo
              ? handleSubmit(onSubmit)()
              : onSubmit()
          }
        />
      </View>
    </>
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
