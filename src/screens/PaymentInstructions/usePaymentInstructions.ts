import {useState} from 'react';

const usePaymentInstructions = () => {
  const [standardServiceSubscribed, setStandardServiceSubscribed] = useState(
    false,
  );
  const [premiumServiceSubscribed, setPremiumServiceSubscribed] = useState(
    false,
  );

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
    standardServiceSubscribed,
    premiumServiceSubscribed,
    onPremiumServiceSubscribe,
    onStandardServiceSubscribe,
  };
};

export default usePaymentInstructions;
