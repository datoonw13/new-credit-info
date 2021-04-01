import { useTranslation } from 'react-i18next';
import Biometrics from 'react-native-biometrics';
import {activateBiometricsAuth} from 'utils/storage';
import {useNavigation, useRoute} from '@react-navigation/core';
import {alertSuccess, alertWarning} from 'utils/dropdownAlert';

const useSetFingerprint = () => {
  const {goBack} = useNavigation();
  const {params} = useRoute();
  const {t} = useTranslation();

  /**
   * Activate fingerprint authorization.
   */
  const onActivatePress = async () => {
    try {
      const {available, biometryType} = await Biometrics.isSensorAvailable();
      if (available) {
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
        const {success, error} = await Biometrics.simplePrompt(simplePromptConfig);
        console.log(success, error);
        if (success) {
          await activateBiometricsAuth();
          alertSuccess('', 'security.easyAuthActivated');
          params?.onSuccess();
          goBack();
        }
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
