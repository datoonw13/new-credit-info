import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'components';
import * as SVG from 'assets/svg';
import {colors} from 'theme';
import {useTranslation} from 'react-i18next';
import {Divider} from 'react-native-elements';

const SaveCardOrNot: SaveCardOrNotFC = ({visible}) => {
  const {t} = useTranslation();

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.creditCardIconWrapper}>
        <SVG.CreditCard2 />
      </View>
      <Text style={styles.copy}>
        {t('subscribeService.transactionWarning')}
      </Text>
      <Button
        text="subscribeService.payWithSavingCard"
        containerStyle={styles.saveCardButton}
        textStyle={styles.saveCardButtonText}
      />
      <Divider />
      <Button
        text="subscribeService.payWithoutSavingCard"
        containerStyle={styles.dontSaveButton}
        textStyle={styles.dontSaveButtonText}
      />
    </View>
  );
};

export default SaveCardOrNot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  creditCardIconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 22,
    backgroundColor: colors.strangeBlueOp1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  copy: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 28,
  },
  saveCardButton: {
    backgroundColor: colors.secondGreenOp3,
  },
  saveCardButtonText: {
    color: colors.green,
    letterSpacing: 0,
  },
  dontSaveButton: {
    backgroundColor: colors.yellowOp1,
  },
  dontSaveButtonText: {
    color: colors.yellow,
    letterSpacing: 0,
    textAlign: 'center',
  },
});
