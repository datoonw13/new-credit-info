import {useCallback, useState} from 'react';
import {useForm} from 'react-hook-form';
import {ValidationRules} from 'react-hook-form/dist/types/form';
import * as services from 'services';
import {alertError, alertSuccess, alertWarning} from 'utils/dropdownAlert';
import zxc from 'zxcvbn';
import {ifCredentialsSetPassword} from 'utils/keychain';
import {useNavigation} from '@react-navigation/core';

const useChangePassword = () => {
  /**
   * Initiate form validation handler.
   */
  const {
    reset,
    watch,
    errors,
    control,
    setValue,
    getValues,
    handleSubmit,
  } = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      repeatNewPassword: '',
    },
  });

  /**
   * Passwords visibility.
   */
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [repeatNewPasswordVisible, setRepeatNewPasswordVisible] = useState(
    false,
  );

  const {goBack} = useNavigation();

  /**
   * New password validation score.
   */
  const [validationScore, setValidationScore] = useState<number>(0);

  /**
   * On visibility icon press.
   */
  const onCurrentPasswordVisibilityPress = () =>
    setCurrentPasswordVisible(!currentPasswordVisible);

  const onNewPasswordVisibilityPress = () =>
    setNewPasswordVisible(!newPasswordVisible);

  const onRepeatNewPasswordVisibilityPress = () =>
    setRepeatNewPasswordVisible(!repeatNewPasswordVisible);

  /**
   * New password validation rule.
   */
  const newPasswordValidationRule = useCallback(
    (): ValidationRules => ({
      required: true,
      validate: () => validationScore >= 3,
    }),
    [validationScore],
  );

  /**
   * Repeat new password validation rule.
   */
  const repeatNewPasswordValidationRule = useCallback(
    (): ValidationRules => ({
      required: true,
      validate: () => watch('newPassword') === watch('repeatNewPassword'),
    }),
    [watch],
  );

  /**
   * New password change text handler.
   */
  const onNewPasswordTextChange = (text: string) => {
    setValue('newPassword', text);
    const passwordStrength = zxc(text).score;
    setValidationScore(passwordStrength);
  };

  /**
   * Update password handler.
   */
  const updatePassword = useCallback(async () => {
    const {currentPassword, newPassword} = getValues();

    try {
      await services.changePassword(currentPassword, newPassword);
      ifCredentialsSetPassword(newPassword);
      reset();
      alertSuccess('', 'changePassword.successfullyChanged');
      goBack();
    } catch (e) {
      if (e.response.status === 409) {
        alertWarning('', 'changePassword.updateFailed');
        reset();
      } else {
        alertError('', 'dropdownAlert.errorTryLater');
        reset();
      }
    }
  }, [getValues, reset, goBack]);

  /**
   * On submit press validate fields,
   * and if everything is correct handle
   * password update.
   */
  const onSubmitPress = handleSubmit(updatePassword);

  return {
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
  };
};

export default useChangePassword;
