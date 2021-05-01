import {useCallback, useMemo, useState} from 'react';
import {PaymentType} from './types';

const useChoosePaymentTypeModal = () => {
  const [paymentType, setPaymentType] = useState<PaymentType>(
    'WithCurrentCard',
  );

  /**
   * Determine if payment with current
   * card is selected.
   */
  const withCurrentCard = useMemo(() => paymentType === 'WithCurrentCard', [
    paymentType,
  ]);

  /**
   * Determine if payment with current
   * card is selected.
   */
  const withOtherCard = useMemo(() => paymentType === 'WithOtherCard', [
    paymentType,
  ]);

  /**
   * Select making payment using current card.
   */
  const onPayWithCurrentCardPress = useCallback(
    () => setPaymentType('WithCurrentCard'),
    [],
  );

  /**
   * Select making payment using the other card.
   */
  const onPayWithOtherCardPress = useCallback(
    () => setPaymentType('WithOtherCard'),
    [],
  );

  return {
    onPayWithCurrentCardPress,
    onPayWithOtherCardPress,
    withCurrentCard,
    withOtherCard,
  };
};

export default useChoosePaymentTypeModal;
