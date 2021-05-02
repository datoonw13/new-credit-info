import {createRef, useImperativeHandle} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {delay} from 'helpers';
import Animated from 'react-native-reanimated';

const useChoosePaymentTypeModal = (ref: any) => {
  const bottomSheetModalRef = createRef<BottomSheetModal>();
  const backdropValue = Animated.useSharedValue(1);

  /**
   * Create handle for parent component to
   * be able to open modal.
   */
  useImperativeHandle(ref, () => ({
    open: async () => {
      bottomSheetModalRef.current?.present();
      await delay(0.3);
      bottomSheetModalRef.current?.snapTo(1);
    },
    close: () => {
      bottomSheetModalRef.current?.close();
    },
  }));

  /**
   * Close bottom sheet modal handler.
   */
  const closeModal = () => bottomSheetModalRef.current?.close();

  return {
    bottomSheetModalRef,
    backdropValue,
    closeModal,
  };
};

export default useChoosePaymentTypeModal;
