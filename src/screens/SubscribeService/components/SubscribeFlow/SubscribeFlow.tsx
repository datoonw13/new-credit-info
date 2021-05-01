import React, {forwardRef, useState} from 'react';
import {BaseBottomSheetModal} from 'components';
import {
  ChoosePaymentType,
  ChooseCard,
  SaveCardOrNot,
  ProceedToPay,
  PaymentCompleted,
} from '../index';
import {modalTitles} from './config';

const SubscribeFlow = forwardRef((_, ref: any) => {
  const [modalTitle, setModalTitle] = useState(modalTitles.chooseCard);

  return (
    <BaseBottomSheetModal ref={ref} title={modalTitle} modalHeight="60%">
      <ChoosePaymentType visible={false} />
      <ChooseCard visible={false} />
      <SaveCardOrNot visible={true} />
      <ProceedToPay visible={false} />
      <PaymentCompleted visible={false} />
    </BaseBottomSheetModal>
  );
});

export default SubscribeFlow;