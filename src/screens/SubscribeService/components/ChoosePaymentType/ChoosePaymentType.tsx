import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Text} from 'components';
import {colors} from 'theme';
import {PaymentTypeItemFC, ChoosePaymentTypeFC} from './types';
import {useTranslation} from 'react-i18next';
import useChoosePaymentType from './useChoosePaymentType';

const ChoosePaymentTypeModal: ChoosePaymentTypeFC = ({visible}) => {
  const {
    onPayWithCurrentCardPress,
    onPayWithOtherCardPress,
    withCurrentCard,
    withOtherCard,
  } = useChoosePaymentType();

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <PaymentTypeItem
          onPress={onPayWithCurrentCardPress}
          title="subscribeService.payWithCurrentCard"
          selected={withCurrentCard}
        />
        <PaymentTypeItem
          onPress={onPayWithOtherCardPress}
          title="subscribeService.payWithOtherCard"
          selected={withOtherCard}
        />
      </View>
      <Button text="next" touchableStyle={styles.nextButton} />
    </View>
  );
};

const PaymentTypeItem: PaymentTypeItemFC = ({title, selected, onPress}) => {
  const {t} = useTranslation();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.paymentTypeContainer,
        selected && styles.paymentTypeActive,
        !selected && styles.paymentTypeActiveInactive,
      ]}>
      <Text
        style={[
          styles.paymentTypeText,
          selected && styles.paymentTypeTextActive,
        ]}>
        {t(title)}
      </Text>
      <View
        style={[
          styles.paymentTypeCircleIcon,
          selected && styles.paymentTypeCircleIconActive,
        ]}
      />
    </TouchableOpacity>
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
  paymentTypeContainer: {
    height: 52,
    backgroundColor: colors.white,
    borderRadius: 14,
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  paymentTypeActive: {
    backgroundColor: colors.thirdGreen,
  },
  paymentTypeActiveInactive: {
    borderWidth: 1,
    borderColor: colors.blackOp2,
  },
  paymentTypeText: {
    color: colors.black,
  },
  paymentTypeTextActive: {
    color: colors.white,
  },
  paymentTypeCircleIcon: {
    height: 16,
    width: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.blackOp3,
  },
  paymentTypeCircleIconActive: {
    borderWidth: 3,
    borderColor: colors.white,
  },
  nextButton: {
    marginTop: 50,
  },
});
