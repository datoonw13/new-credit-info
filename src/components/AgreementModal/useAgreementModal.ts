import {useState} from 'react';
import {alertWarning} from 'utils/dropdownAlert';

const useAgreementModal = () => {
  const [agreementChecked, setAgreementChecked] = useState(false);

  /**
   * Handle checkbox press.
   */
  const onAgreementToggle = () => setAgreementChecked(!agreementChecked);

  /**
   * Handle agreement.
   */
  const onPress = () => {
    if (agreementChecked === false) {
      alertWarning('', 'termsAndConditions.mustAgree');
    }
  };

  return {
    onPress,
    agreementChecked,
    onAgreementToggle,
  };
};

export default useAgreementModal;
