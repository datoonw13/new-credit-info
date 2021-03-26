import {useCallback, useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {useTranslation} from 'react-i18next';
import Biometrics from 'react-native-biometrics';
import {alertError} from 'utils/dropdownAlert';
import {getCredentials} from 'utils/keychain';
import {signIn} from 'store/auth/sagaActions';
import {useDispatch} from 'react-redux';
import {Alert} from 'react-native';

const useSignInPass = () => {
  const {t} = useTranslation();
  const [pinNumber, setPinNumber] = useState('');
  const [forgotPasscode, setForgotPasscode] = useState(false);
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  /**
   * Go to auth screen on OtherUser press.
   */
  const onOtherUserPress = useCallback(() => navigate('Auth'), [navigate]);

  /**
   * Watch custom keyboard.
   */
  const watchKeyboard = (value: number) => {
    if (value !== 10 && value !== 11) {
      if (pinNumber.length === 3) {
        const newPin = `${pinNumber}${value}`;
        Alert.alert(`Passcode ${newPin}`, 'Not yet implemented!');
        setPinNumber('');
      } else {
        pinNumber.length <= 4 && setPinNumber(`${pinNumber}${value}`);
      }
    } else if (value === 10) {
      onFingerPrintPress();
    } else if (value === 11 && pinNumber !== '') {
      setPinNumber(pinNumber.slice(0, pinNumber.length - 1));
    }
  };

  /**
   * On fingerprint press.
   */
  const onFingerPrintPress = async () => {
    const {available, biometryType} = await Biometrics.isSensorAvailable();

    const simplePromptConfig = {
      promptMessage: t('signInPass.touchId'),
      cancelButtonText: 'close',
    };

    switch (biometryType) {
      case Biometrics.Biometrics:
        simplePromptConfig.promptMessage = t('signInPass.biometrics');
        break;
      case Biometrics.FaceID:
        simplePromptConfig.promptMessage = t('signInPass.faceId');
        break;
    }

    if (available) {
      const {success} = await Biometrics.simplePrompt(simplePromptConfig);

      if (success) {
        signInOnFingerprintSuccess();
        return;
      }
    }

    alertError('', 'signInPass.biometricsNotAvailable');
  };

  /**
   * Sign in to the app.
   */
  const signInOnFingerprintSuccess = async () => {
    try {
      const credentials = await getCredentials();
      dispatch(signIn(credentials));
    } catch (e) {
      console.log(e);
      alertError('', 'signInPass.authError');
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
    setForgotPasscode,
    onOtherUserPress,
    passcodeLength,
    forgotPasscode,
    watchKeyboard,
    t,
  };
};

export default useSignInPass;
