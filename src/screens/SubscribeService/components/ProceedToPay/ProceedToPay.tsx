import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, FancyIcon} from 'components';
import {useTranslation} from 'react-i18next';
import * as SVG from 'assets/svg';

const ProceedToPay: ProceedToPayFC = ({visible, handler}) => {
  const {t} = useTranslation();

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FancyIcon
        Icon={SVG.InfoCrimson}
        dimensions={72}
        roundness={22}
        style={styles.infoIconWrapper}
      />
      <Text style={styles.warningText}>
        {t('subscribeService.transactionWarning2')}
      </Text>
      <Button
        touchableStyle={styles.button}
        text="subscribeService.proceedTransaction"
        onPress={handler}
      />
    </View>
  );
};

export default ProceedToPay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  infoIconWrapper: {
    marginVertical: 28,
  },
  warningText: {
    textAlign: 'center',
    marginBottom: 26,
  },
  button: {},
});
