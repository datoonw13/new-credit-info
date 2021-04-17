import {useState} from 'react';
import {BankType} from './components/BankSwitcher/types';

const usePaymentInstructions = () => {
  const [standardServiceSubscribed, setStandardServiceSubscribed] = useState(
    false,
  );
  const [premiumServiceSubscribed, setPremiumServiceSubscribed] = useState(
    false,
  );

  const [selectedBank, setSelectedBank] = useState<BankType>('BOG');

  /**
   * On standard service subscribe...
   */
  const onStandardServiceSubscribe = (value: boolean) => {
    setStandardServiceSubscribed(value);
  };

  /**
   * On premium service subscribe...
   */
  const onPremiumServiceSubscribe = (value: boolean) => {
    setPremiumServiceSubscribed(value);
  };

  return {
    selectedBank,
    setSelectedBank,
    standardServiceSubscribed,
    premiumServiceSubscribed,
    onPremiumServiceSubscribe,
    onStandardServiceSubscribe,
  };
};

export default usePaymentInstructions;
