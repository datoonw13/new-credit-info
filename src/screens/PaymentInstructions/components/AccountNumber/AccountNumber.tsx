import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'components';
import {AccountNumberFC} from './types';
import {colors} from 'theme';
import * as SVG from 'assets/svg';
import {useTranslation} from 'react-i18next';
import useAccountNumber from './useAccountNumber';

const AccountNumber: AccountNumberFC = ({accountNumber, style}) => {
  const {t} = useTranslation();
  const {copyToClipboard} = useAccountNumber(accountNumber);
  return (
    <View style={[styles.container, style]}>
      <View>
        <Text style={styles.receiver}>
          {t('paymentInstructions.receiverAccount')}
        </Text>
        <Text>{accountNumber}</Text>
      </View>
      <TouchableOpacity
        style={styles.copyIconWrapper}
        onPress={copyToClipboard}>
        <SVG.Copy />
      </TouchableOpacity>
    </View>
  );
};

export default AccountNumber;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.blackOp2,
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 22,
  },
  copyIconWrapper: {
    backgroundColor: colors.blackOp2,
    borderRadius: 8,
    padding: 8,
  },
  receiver: {
    color: colors.blackOp5,
    marginBottom: 3,
  },
});
