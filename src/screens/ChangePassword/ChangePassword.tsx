import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {BaseHeader, PasswordGuide, Input, InputEye, Button} from 'components';
import {Controller} from 'react-hook-form';
import {Divider} from 'react-native-elements';
import useChangePassword from './useChangePassword';
import {rules} from 'utils/form';
import {useErrorMessage} from 'hooks';

const ChangePassword = () => {
  const {
    errors,
    control,
    onSubmitPress,
    newPasswordVisible,
    currentPasswordVisible,
    onNewPasswordTextChange,
    repeatNewPasswordVisible,
    newPasswordValidationRule,
    onNewPasswordVisibilityPress,
    repeatNewPasswordValidationRule,
    onCurrentPasswordVisibilityPress,
    onRepeatNewPasswordVisibilityPress,
  } = useChangePassword();

  const {
    currentPasswordErrorMsg,
    newPasswordErrorMsg,
    repeatNewPasswordErrorMsg,
  } = useErrorMessage(errors);

  return (
    <SafeAreaView style={styles.container}>
      <BaseHeader title="changePassword.title" />
      <KeyboardAvoidingView style={styles.avoidingView} behavior="padding">
        <ScrollView
          style={styles.scrollViewContainer}
          contentContainerStyle={styles.scrollViewContentContainer}>
          <PasswordGuide style={styles.passwordGuide} />

          <Controller
            name="currentPassword"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                onBlur={onBlur}
                value={value}
                maxLength={35}
                label="changePassword.currentPassword"
                secureTextEntry={!currentPasswordVisible}
                rightIconPressHandler={onCurrentPasswordVisibilityPress}
                errorMessage={currentPasswordErrorMsg()}
                onChangeText={onChange}
                rightIcon={<InputEye visible={currentPasswordVisible} />}
              />
            )}
            rules={rules.required()}
          />
          <Divider />
          <Controller
            name="newPassword"
            control={control}
            render={({onBlur, value}) => (
              <Input
                onBlur={onBlur}
                value={value}
                maxLength={35}
                label="changePassword.newPassword"
                secureTextEntry={!newPasswordVisible}
                rightIconPressHandler={onNewPasswordVisibilityPress}
                onChangeText={onNewPasswordTextChange}
                rightIcon={<InputEye visible={newPasswordVisible} />}
                errorMessage={newPasswordErrorMsg()}
              />
            )}
            rules={newPasswordValidationRule()}
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
                label="changePassword.repeatNewPassword"
                secureTextEntry={!repeatNewPasswordVisible}
                rightIconPressHandler={onRepeatNewPasswordVisibilityPress}
                onChangeText={onChange}
                rightIcon={<InputEye visible={repeatNewPasswordVisible} />}
                errorMessage={repeatNewPasswordErrorMsg()}
              />
            )}
            rules={repeatNewPasswordValidationRule()}
          />
          <Divider />
          <Button text="save" onPress={onSubmitPress} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
  },
  avoidingView: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollViewContainer: {
    flex: 1,
  },
  scrollViewContentContainer: {
    paddingBottom: 50,
  },
  passwordGuide: {
    marginTop: 38,
  },
});
