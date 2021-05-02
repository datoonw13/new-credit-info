import {useCallback, useEffect, useState} from 'react';

const useSubscribeFlow = (ref: any) => {
  const [choosePaymentTypeVisible, setChoosePaymentTypeVisible] = useState(
    true,
  );
  const [chooseCardVisible, setChooseCardVisible] = useState(false);
  const [saveCardOrNotVisible, setSaveCardOrNotVisible] = useState(false);
  const [proceedToPayVisible, setProceedToPayVisible] = useState(false);
  const [paymentCompletedVisible, setPaymentCompletedVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState(
    'subscribeService.paymentMethod',
  );

  /**
   * Manage modal titles.
   */
  useEffect(() => {
    if (choosePaymentTypeVisible) {
      setModalTitle('subscribeService.paymentMethod');
    } else {
      setModalTitle('subscribeService.title');
    }
  }, [choosePaymentTypeVisible]);

  /**
   * Close modal handler.
   */
  const closeModal = useCallback(() => ref.current?.close(), [ref]);

  /**
   * Disable all steps.
   */
  const disableAllSteps = useCallback(() => {
    setChoosePaymentTypeVisible(false);
    setChooseCardVisible(false);
    setSaveCardOrNotVisible(false);
    setProceedToPayVisible(false);
    setPaymentCompletedVisible(false);
  }, []);

  /**
   *  Choose payment method handler.
   */
  const choosePaymentTypeHandler = useCallback(() => {
    disableAllSteps();
    setChooseCardVisible(true);
  }, [disableAllSteps]);

  /**
   * Choose user card handler.
   */
  const chooseCardHandler = useCallback(() => {
    disableAllSteps();
    setSaveCardOrNotVisible(true);
  }, [disableAllSteps]);

  /**
   * Decide save user card or not save.
   */
  const saveCardOrNotHandler = useCallback(() => {
    disableAllSteps();
    setProceedToPayVisible(true);
  }, [disableAllSteps]);

  /**
   * Proceed to pay handler.
   */
  const proceedToPayHandler = useCallback(() => {
    disableAllSteps();
    setPaymentCompletedVisible(true);
  }, [disableAllSteps]);

  return {
    modalTitle,
    closeModal,
    chooseCardHandler,
    chooseCardVisible,
    proceedToPayHandler,
    proceedToPayVisible,
    saveCardOrNotVisible,
    saveCardOrNotHandler,
    paymentCompletedVisible,
    choosePaymentTypeVisible,
    choosePaymentTypeHandler,
  };
};

export default useSubscribeFlow;
