import {Text} from 'components';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {colors} from 'theme';

const BalanceAndReportCost: BalanceAndReportCostFC = ({
  sendReportCost,
  balance,
}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={[styles.innerContainers, styles.topContainer]}>
        <Text>{t('sendReport.balance')}</Text>
        <Text>{balance.toString()}</Text>
      </View>
      <View style={[styles.innerContainers, styles.bottomContainer]}>
        <Text>{t('sendReport.sendReportCost')}</Text>
        <Text>{sendReportCost.toString()}</Text>
      </View>
    </View>
  );
};

export default BalanceAndReportCost;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  innerContainers: {
    height: 82,
    paddingHorizontal: 15,
    paddingVertical: 17,
    backgroundColor: colors.blackOp1,
  },
  topContainer: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  bottomContainer: {
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: colors.white,
  },
});
