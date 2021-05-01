import React, {forwardRef, useState} from 'react';
import {BaseBottomSheetModal} from 'components';
import {ChoosePaymentType, ChooseCard} from '../index';
import {modalTitles} from './config';

const SubscribeFlow = forwardRef((_, ref: any) => {
  const [modalTitle, setModalTitle] = useState(modalTitles.chooseCard);

  return (
    <BaseBottomSheetModal ref={ref} title={modalTitle}>
      <ChoosePaymentType visible={false} />
      <ChooseCard visible={true} />
    </BaseBottomSheetModal>
  );
});

export default SubscribeFlow;
