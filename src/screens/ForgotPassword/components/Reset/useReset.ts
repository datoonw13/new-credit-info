import {useNavigation} from '@react-navigation/core';
import {useState} from 'react';
import * as services from 'services';

const useReset = ({username}: ResetProps) => {
  const [passwordScore, setPasswordScore] = useState(0);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);

  const {navigate} = useNavigation();

  /**
   * Toggle password visibility.
   */
  const onPasswordIconPress = () => setPasswordVisible(!passwordVisible);

  /**
   * Toggle repeat password visibility.
   */
  const onRepeatPasswordIconPress = () =>
    setRepeatPasswordVisible(!repeatPasswordVisible);

  /**
   * Reset password.
   */
  const onChangePassword = async (data: OnChangePassword) => {
    try {
      await services.forgotPasswordRest(username, data.password);
      navigate('Auth');
    } catch (e) {
      console.log(e);
    }
  };

  return {
    passwordScore,
    passwordVisible,
    setPasswordScore,
    onChangePassword,
    onPasswordIconPress,
    repeatPasswordVisible,
    onRepeatPasswordIconPress,
  };
};

export default useReset;
