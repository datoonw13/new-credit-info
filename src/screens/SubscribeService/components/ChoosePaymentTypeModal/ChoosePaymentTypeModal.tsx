import {Text} from 'components';
import React, {createRef, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {colors} from 'theme';

const ChoosePaymentTypeModal = () => {
  const ref = createRef<BottomSheetModal>();

  useEffect(() => {
    ref.current?.present();
    ref.current?.expand();
  }, [ref]);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal snapPoints={['5%', '25%']} ref={ref}>
        <Text>This is a modal</Text>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default ChoosePaymentTypeModal;
