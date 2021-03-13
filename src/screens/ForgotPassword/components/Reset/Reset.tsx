import React from 'react';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'theme';
import {Input, Button} from 'components';
import {Divider} from 'react-native-elements';
import {useForm, Controller} from 'react-hook-form';
import zxc from 'zxcvbn';
import useReset from './useReset';
import {useTranslation} from 'react-i18next';

const Reset: ResetFC = ({username}) => {
  const {control, errors, watch, handleSubmit} = useForm({
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
    mode: 'onSubmit',
  });
  const {t} = useTranslation();
  const {
    onRepeatPasswordIconPress,
    repeatPasswordVisible,
    onPasswordIconPress,
    setPasswordScore,
    onChangePassword,
    passwordVisible,
    passwordScore,
  } = useReset({username});

  return (
    <View>
      <Controller
        name="password"
        control={control}
        render={({onBlur, onChange, value}) => (
          <Input
            onBlur={onBlur}
            value={value}
            maxLength={35}
            label="registration.password"
            secureTextEntry={!passwordVisible}
            rightIconPressHandler={onPasswordIconPress}
            errorMessage={errors.password?.message}
            onChangeText={(val) => {
              onChange(val);
              setPasswordScore(zxc(val).score);
            }}
            rightIcon={
              <Ionicons
                name={true ? 'eye-off' : 'eye'}
                color={colors.GRAY8}
                size={22}
              />
            }
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
        render={({onBlur, onChange, value}) => (
          <Input
            onBlur={onBlur}
            value={value}
            maxLength={35}
            label="registration.repeatPassword"
            secureTextEntry={!repeatPasswordVisible}
            rightIconPressHandler={onRepeatPasswordIconPress}
            onChangeText={onChange}
            rightIcon={
              <Ionicons
                name={true ? 'eye-off' : 'eye'}
                color={colors.GRAY8}
                size={22}
              />
            }
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
      <Button
        onPress={handleSubmit(onChangePassword)}
        touchableStyle={styles.button}
        text="continue"
      />
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});
