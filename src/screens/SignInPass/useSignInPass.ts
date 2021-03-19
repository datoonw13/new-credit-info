import {useCallback, useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {useTranslation} from 'react-i18next';

const useSignInPass = () => {
  const {t} = useTranslation();
  const [pinNumber, setPinNumber] = useState('');
  const [forgotPasscode, setForgotPasscode] = useState(false);
  const {navigate} = useNavigation();

  /**
   * Go to auth screen on OtherUser press.
   */
  const onOtherUserPress = useCallback(() => navigate('Auth'), [navigate]);

  /**
   * Watch custom keyboard.
   */
  const watchKeyboard = (value: number) => {
    if (value !== 10 && value !== 11) {
      setPinNumber(`${pinNumber}${value}`);
    }
  };

  /**
   * Passcode length.
   */
  const passcodeLength = useMemo(() => pinNumber.length, [pinNumber]);

  /**
   * On forgot passcode press,
   * view should change so that
   * user will be able to type his password.
   */
  const onForgotPasswordPress = () => setForgotPasscode(true);

  /**
   * Close auth with password modal.
   */
  const onAuthModalBackdropPress = () => setForgotPasscode(false);

  return {
    onAuthModalBackdropPress,
    onForgotPasswordPress,
    setForgotPasscode,
    onOtherUserPress,
    passcodeLength,
    forgotPasscode,
    watchKeyboard,
    t,
  };
};

export default useSignInPass;
