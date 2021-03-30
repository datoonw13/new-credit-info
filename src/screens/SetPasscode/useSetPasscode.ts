import {useNavigation} from '@react-navigation/core';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {alertWarning} from 'utils/dropdownAlert';

const useSetPasscode = () => {
  const [view, setView] = useState<PasscodeView>('SetPasscode');
  const [valueLength, setValueLength] = useState(0);
  const [passcode, setPasscode] = useState('');
  const [repeatPasscode, setRepeatPasscode] = useState('');
  const {goBack} = useNavigation();

  /**
   * On passcode press filter
   * keys and update state.
   */
  const onPasscodePress = (key: number) => {
    if (key === 11 && passcode !== '') {
      setPasscode(passcode.slice(0, passcode.length - 1));
    } else if (key !== 11 && passcode.length < 4) {
      setPasscode(`${passcode}${key}`);
    }
  };

  /**
   * On repeat-passcode press filter
   * keys and update state.
   */
  const onRepeatPasscodePress = (key: number) => {
    if (key === 11 && repeatPasscode !== '') {
      setRepeatPasscode(repeatPasscode.slice(0, repeatPasscode.length - 1));
    } else if (key !== 11 && repeatPasscode.length < 4) {
      setRepeatPasscode(`${repeatPasscode}${key}`);
    }
  };

  /**
   * On passcode change set passcode length value.
   */
  useEffect(() => {
    setValueLength(passcode.length);
  }, [passcode]);

  /**
   * On passcode change check if it reached 4 digits
   * and if so change the view with repeat passcode.
   */
  useEffect(() => {
    if (passcode.length === 4) {
      setView('RepeatPasscode');
      setValueLength(0);
    }
  }, [passcode]);

  /**
   * On repeat-passcode change set passcode length value.
   */
  useEffect(() => {
    setValueLength(repeatPasscode.length);
  }, [repeatPasscode]);

  /**
   * On repeat-passcode change check if it reached 4 digits
   * and if so send xhr call.
   */
  useEffect(() => {
    if (repeatPasscode.length === 4) {
      if (passcode !== repeatPasscode) {
        alertWarning('', 'security.passcodeMismatch');
        setPasscode('');
        setRepeatPasscode('');
        setView('SetPasscode');
      } else {
        Alert.alert('ბოდიში მომითხოვია', 'ჯერ ბექთან არ არის ჩაბმული...');
        goBack();
      }
    }
  }, [repeatPasscode, passcode, goBack]);

  return {
    onRepeatPasscodePress,
    onPasscodePress,
    valueLength,
    view,
  };
};

export default useSetPasscode;
