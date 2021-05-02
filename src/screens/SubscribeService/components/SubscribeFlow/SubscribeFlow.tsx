/* eslint-disable prettier/prettier */
import React, {forwardRef} from 'react';
import {BaseBottomSheetModal} from 'components';
import {
  ChoosePaymentType,
  PaymentCompleted,
  SaveCardOrNot,
  ProceedToPay,
  ChooseCard,
} from '../index';
import useSubscribeFlow from './useSubscribeFlow';

const SubscribeFlow = forwardRef((_, ref: any) => {
  const {
    choosePaymentTypeVisible,
    choosePaymentTypeHandler,
    paymentCompletedVisible,
    saveCardOrNotVisible,
    saveCardOrNotHandler,
    proceedToPayVisible,
    proceedToPayHandler,
    chooseCardVisible,
    chooseCardHandler,
    closeModal,
    resetSteps,
    modalTitle,
  } = useSubscribeFlow(ref);

  return (
    <BaseBottomSheetModal ref={ref} title={modalTitle} modalHeight="60%" onDismiss={resetSteps}>
      <ChoosePaymentType visible={choosePaymentTypeVisible} handler={choosePaymentTypeHandler} />
      <ChooseCard visible={chooseCardVisible} handler={chooseCardHandler} />
      <SaveCardOrNot visible={saveCardOrNotVisible} handler={saveCardOrNotHandler} />
      <ProceedToPay visible={proceedToPayVisible} handler={proceedToPayHandler} />
      <PaymentCompleted visible={paymentCompletedVisible} closeModal={closeModal} />
    </BaseBottomSheetModal>
  );
});

export default SubscribeFlow;
