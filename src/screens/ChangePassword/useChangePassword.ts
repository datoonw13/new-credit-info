import {useState} from 'react';
import {useForm} from 'react-hook-form';

const useChangePassword = () => {
  /**
   * Initiate form validation handler.
   */
  const {control, errors} = useForm({
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

  /**
   * On visibility icon press.
   */
  const onCurrentPasswordVisibilityPress = () =>
    setCurrentPasswordVisible(!currentPasswordVisible);

  const onNewPasswordVisibilityPress = () =>
    setNewPasswordVisible(!newPasswordVisible);

  const onRepeatNewPasswordVisibilityPress = () =>
    setRepeatNewPasswordVisible(!repeatNewPasswordVisible);

  return {
    errors,
    control,
    newPasswordVisible,
    currentPasswordVisible,
    repeatNewPasswordVisible,
    onNewPasswordVisibilityPress,
    onCurrentPasswordVisibilityPress,
    onRepeatNewPasswordVisibilityPress,
  };
};

export default useChangePassword;
