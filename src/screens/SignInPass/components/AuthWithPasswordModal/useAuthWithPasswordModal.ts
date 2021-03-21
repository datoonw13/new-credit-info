import {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {useTranslation} from 'react-i18next';
import {getCredentials} from 'utils/keychain';
import {signIn} from 'store/auth/sagaActions';
import {useDispatch} from 'react-redux';

const useAuthWithPasswordModal = ({
  setVisible,
}: Omit<AuthWithPasswordModalProps, 'visible' | 'onBackdropPress'>) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  /**
   * Toggle password visibility on password eye press.
   */
  const onPasswordEyePress = () => setPasswordVisible(!passwordVisible);

  /**
   * On forgot password press.
   */
  const onForgotPasswordPress = () => navigate('ForgotPassword');

  /**
   * On auth press.
   */
  const onAuthPress = async ({password}: AuthData) => {
    const {username} = (await getCredentials()) as any;

    const authData = {
      username,
      password,
    };

    dispatch(signIn(authData));
    setVisible(false);
  };

  return {
    onForgotPasswordPress,
    onPasswordEyePress,
    passwordVisible,
    onAuthPress,
    t,
  };
};

export default useAuthWithPasswordModal;
