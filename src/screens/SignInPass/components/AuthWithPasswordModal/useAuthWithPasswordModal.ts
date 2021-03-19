import {useState} from 'react';
import {useTranslation} from 'react-i18next';

const useAuthWithPasswordModal = () => {
  const {t} = useTranslation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  /**
   * Toggle password visibility on password eye press.
   */
  const onPasswordEyePress = () => setPasswordVisible(!passwordVisible);

  return {
    onPasswordEyePress,
    passwordVisible,
    t,
  };
};

export default useAuthWithPasswordModal;
