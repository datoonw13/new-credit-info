import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import zxc from 'zxcvbn';
import {Controller} from 'react-hook-form';
import {Button, Input, PasswordGuide, InputEye} from 'components';
import useSetPassword from './useSetPassword';
import {useTranslation} from 'react-i18next';

const SetPassword: SetPasswordFC = ({lastStep, registerData}) => {
  const {
    setRepeatPasswordVisible,
    repeatPasswordVisible,
    setPasswordVisible,
    setPasswordScore,
    passwordVisible,
    passwordScore,
    handleSubmit,
    onSubmit,
    control,
    errors,
    watch,
  } = useSetPassword({
    registerData,
    lastStep,
  });

  const {t} = useTranslation();
  console.log(errors);
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <PasswordGuide />
          <Controller
            name="password"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                onBlur={onBlur}
                value={value}
                maxLength={35}
                label="registration.password"
                secureTextEntry={passwordVisible}
                rightIconPressHandler={() => {
                  setPasswordVisible(!passwordVisible);
                }}
                editable={lastStep === 3}
                errorMessage={errors.password?.message}
                onChangeText={(val) => {
                  onChange(val);
                  setPasswordScore(zxc(val).score);
                }}
                rightIcon={<InputEye visible={passwordVisible} />}
              />
            )}
            rules={{
              required: {
                value: true,
                message: t('registration.validPassword'),
              },
              validate: () =>
                passwordScore >= 3
                  ? true
                  : (t('registration.validPassword') as string),
            }}
          />
          <Divider />
          <Controller
            name="repeatPassword"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                onBlur={onBlur}
                value={value}
                maxLength={35}
                label="registration.repeatPassword"
                secureTextEntry={repeatPasswordVisible}
                rightIconPressHandler={() =>
                  setRepeatPasswordVisible(!repeatPasswordVisible)
                }
                editable={lastStep === 3}
                onChangeText={onChange}
                rightIcon={<InputEye visible={repeatPasswordVisible} />}
                errorMessage={errors.repeatPassword?.message}
              />
            )}
            rules={{
              required: {
                value: true,
                message: t('registration.validRepeatPassword'),
              },
              validate: (value) => {
                if (errors.password?.message) {
                  return t('registration.validPassword') as string;
                } else if (value === watch('password')) {
                  return true;
                }

                return t('registration.validRepeatPassword') as string;
              },
            }}
          />
        </ScrollView>
        <Divider />
        <Button
          text="continue"
          onPress={() =>
            lastStep === 3 ? handleSubmit(onSubmit)() : onSubmit()
          }
        />
      </View>
    </>
  );
};

export default SetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  passwordError: {
    height: 0,
  },
});
