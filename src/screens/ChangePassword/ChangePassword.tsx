import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {BaseHeader, PasswordGuide, Input, InputEye, Button} from 'components';
import {Controller} from 'react-hook-form';
import {Divider} from 'react-native-elements';
import useChangePassword from './useChangePassword';
import {ScrollView} from 'react-native-gesture-handler';

const ChangePassword = () => {
  const {
    errors,
    control,
    newPasswordVisible,
    currentPasswordVisible,
    repeatNewPasswordVisible,
    onNewPasswordVisibilityPress,
    onCurrentPasswordVisibilityPress,
    onRepeatNewPasswordVisibilityPress,
  } = useChangePassword();

  return (
    <SafeAreaView style={styles.container}>
      <BaseHeader title="changePassword.title" />
      <ScrollView style={styles.scrollView}>
        <PasswordGuide style={styles.passwordGuide} />

        <Controller
          name="currentPassword"
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              onBlur={onBlur}
              value={value}
              maxLength={35}
              label="registration.password"
              secureTextEntry={!currentPasswordVisible}
              rightIconPressHandler={onCurrentPasswordVisibilityPress}
              errorMessage={errors.currentPassword?.message}
              onChangeText={onChange}
              rightIcon={<InputEye visible={currentPasswordVisible} />}
            />
          )}
          // rules={}
        />
        <Divider />
        <Controller
          name="newPassword"
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              onBlur={onBlur}
              value={value}
              maxLength={35}
              label="registration.repeatPassword"
              secureTextEntry={!newPasswordVisible}
              rightIconPressHandler={onNewPasswordVisibilityPress}
              onChangeText={onChange}
              rightIcon={<InputEye visible={newPasswordVisible} />}
              errorMessage={errors.newPassword?.message}
            />
          )}
          // rules={}
        />
        <Divider />
        <Controller
          name="repeatNewPassword"
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              onBlur={onBlur}
              value={value}
              maxLength={35}
              label="registration.repeatPassword"
              secureTextEntry={!repeatNewPasswordVisible}
              rightIconPressHandler={onRepeatNewPasswordVisibilityPress}
              onChangeText={onChange}
              rightIcon={<InputEye visible={repeatNewPasswordVisible} />}
              errorMessage={errors.newPassword?.message}
            />
          )}
          // rules={}
        />
        <Divider />
        <Button text="save" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  passwordGuide: {
    marginTop: 38,
  },
});
