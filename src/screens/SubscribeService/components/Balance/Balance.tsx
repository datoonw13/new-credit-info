import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as SVG from 'assets/svg';
import {Text} from 'components';
import {colors} from 'theme';
import {useTranslation} from 'react-i18next';

const Balance: BalanceFC = ({amount}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <SVG.CreditInfo />
        </View>
      </View>
      <View style={styles.textsWrapper}>
        <Text style={styles.balanceTitle}>{t('subscribeService.balance')}</Text>
        <Text style={styles.balanceAmount}>{`${amount} ₾`}</Text>
      </View>
      <View style={styles.placeholder} />
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blackOp05,
    paddingHorizontal: 22,
    paddingVertical: 28,
    borderRadius: 18,
    marginTop: 16,
  },
  iconContainer: {
    flex: 1,
  },
  iconWrapper: {
    width: 42,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 16,
    position: 'relative',
    top: 10,
  },
  textsWrapper: {
    flex: 3,
  },
  balanceTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 3,
  },
  placeholder: {
    flex: 1,
  },
});
