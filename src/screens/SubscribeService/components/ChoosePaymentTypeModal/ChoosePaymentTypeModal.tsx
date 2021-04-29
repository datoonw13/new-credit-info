import React, {createRef, forwardRef, useImperativeHandle} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Divider, Text} from 'components';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {delay} from 'helpers';
import * as SVG from 'assets/svg';
import Animated from 'react-native-reanimated';
import {colors} from 'theme';

const ChoosePaymentTypeModal = forwardRef((props, ref: any) => {
  const bottomShetetModalRef = createRef<BottomSheetModal>();
  const backdropValue = Animated.useSharedValue(1);

  useImperativeHandle(ref, () => ({
    open: async () => {
      bottomShetetModalRef.current?.present();
      await delay(0.3);
      bottomShetetModalRef.current?.snapTo(1);
    },
  }));

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        snapPoints={[-1, '50%']}
        ref={bottomShetetModalRef}
        backdropComponent={() => (
          <BottomSheetBackdrop
            animatedIndex={backdropValue}
            animatedPosition={backdropValue}
            style={styles.backdrop}
          />
        )}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.heading}>Payment Method</Text>
            <TouchableOpacity style={styles.closeIconWrapper}>
              <SVG.Close />
            </TouchableOpacity>
          </View>
          <Divider width="100%" />
          <View style={styles.paymentTypesWrapper}>
            <PaymentTypeItem />
            <PaymentTypeItem />
          </View>
          <Button text="next" touchableStyle={styles.nextButton} />
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

const PaymentTypeItem = () => {
  return (
    <View style={styles.paymentTypeContainer}>
      <Text style={styles.paymentTypeText}>PaymentTypeItem</Text>
      <View style={styles.paymentTypeCircleIcon} />
    </View>
  );
};

export default ChoosePaymentTypeModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 21,
    paddingBottom: 34,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {},
  closeIconWrapper: {
    backgroundColor: colors.blackOp05,
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  paymentTypesWrapper: {},
  paymentTypeContainer: {},
  paymentTypeActive: {},
  paymentTypeText: {},
  paymentTypeCircleIcon: {},
  nextButton: {},
  backdrop: {
    backgroundColor: colors.black,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
