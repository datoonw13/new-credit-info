import {useNavigation} from '@react-navigation/core';
import {useEffect, useState} from 'react';
import {getPasscode, removePasscode} from 'utils/storage';

const useSecurity = () => {
  const [passcodeSwitchValue, setPasscodeSwitchValue] = useState(false);
  const [fingerprintSwitchValue, setFingerprintSwitchValue] = useState(false);
  const {navigate} = useNavigation();

  /**
   * Set passcode switch value to true
   * if there is passcode saved in async storage.
   */
  useEffect(() => {
    (async () => {
      const passcode = await getPasscode();
      if (passcode !== null) {
        setPasscodeSwitchValue(true);
      }
    })();
  }, []);

  /**
   * On passcode off toggle, remove passcode.
   */
  const onPasscodeSwitchOff = () => {
    removePasscode();
    setPasscodeSwitchValue(false);
  };

  /**
   * On passcode successfully set.
   */
  const onPasscodeSetSuccess = () => {
    setPasscodeSwitchValue(true);
  };

  /**
   * On fingerprint successfully set.
   */
  const onFingerprintSetSuccess = () => {
    setFingerprintSwitchValue(true);
  };

  /**
   * Navigate to passcode.
   */
  const navigateToSetPasscode = () =>
    navigate('SetPasscode', {
      onSuccess: onPasscodeSetSuccess,
    });

  /**
   * Navigate to fingerprint.
   */
  const navigateToSetFingerprint = () => {
    navigate('SetFingerprint', {
      onSuccess: onFingerprintSetSuccess,
    });
  };

  return {
    passcodeSwitchValue,
    onPasscodeSwitchOff,
    navigateToSetPasscode,
    navigateToSetFingerprint,
  };
};

export default useSecurity;
