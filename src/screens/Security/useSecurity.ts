import {useNavigation} from '@react-navigation/core';
import {useEffect, useState} from 'react';
import {
  getBiometricsAuthStatus,
  disableBiometricAuth,
  removePasscode,
  getPasscode,
} from 'utils/storage';

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
   * Set fingerprint switch value to true
   * if there is biometrics status saved
   * in async storage.
   */
  useEffect(() => {
    (async () => {
      const biometrics = await getBiometricsAuthStatus();
      if (biometrics) {
        setFingerprintSwitchValue(true);
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
   * On passcode off toggle, remove passcode.
   */
  const onFingerprintSwitchOff = () => {
    disableBiometricAuth();
    setFingerprintSwitchValue(false);
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
    fingerprintSwitchValue,
    onFingerprintSwitchOff,
    navigateToSetFingerprint,
  };
};

export default useSecurity;
