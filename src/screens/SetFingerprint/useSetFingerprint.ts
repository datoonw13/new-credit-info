import ReactNativeBiometrics from 'react-native-biometrics';
import {activateBiometricsAuth} from 'utils/storage';
import {useNavigation, useRoute} from '@react-navigation/core';
import {alertSuccess, alertWarning} from 'utils/dropdownAlert';

const useSetFingerprint = () => {
  const {goBack} = useNavigation();
  const {params} = useRoute();

  /**
   * Activate fingerprint authorization.
   */
  const onActivatePress = async () => {
    try {
      const {available} = await ReactNativeBiometrics.isSensorAvailable();
      if (available) {
        activateBiometricsAuth();
        alertSuccess('', 'security.easyAuthActivated');
        params?.onSuccess();
        goBack();
      } else {
        alertWarning('', 'signInPass.biometricsNotAvailable');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    onActivatePress,
  };
};

export default useSetFingerprint;
