import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, FancyIcon, ItemCost, LightGreyButton} from 'components';
import * as SVG from 'assets/svg';
import {colors} from 'theme';
import {useTranslation} from 'react-i18next';

const PaymentCompleted: PaymentCompletedFC = ({visible, closeModal}) => {
  const {t} = useTranslation();

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FancyIcon
        Icon={SVG.GreenTick}
        bg={colors.greenOp1}
        style={styles.icon}
        dimensions={72}
        roundness={22}
      />
      <Text style={styles.copy}>
        {t('subscribeService.subscriptionComplete')}
      </Text>
      <ItemCost
        description="subscribeService.standardPackagePrice"
        amount={4.45}
      />
      <LightGreyButton
        text="close"
        touchableContainer={styles.button}
        onPress={closeModal}
      />
    </View>
  );
};

export default PaymentCompleted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginVertical: 28,
  },
  copy: {
    textAlign: 'center',
    marginBottom: 28,
  },
  button: {
    marginTop: 26,
  },
});
