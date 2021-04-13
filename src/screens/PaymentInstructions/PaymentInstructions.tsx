import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Text, DrawerToggle} from 'components';
import {AccountNumber, PayGuide} from './components';
import * as SVG from 'assets/svg';
import {colors} from 'theme';

const PaymentInstructions = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>{t('paymentInstructions.title')}</Text>
          <DrawerToggle visible />
        </View>
        <View style={styles.instructions}>
          <View style={styles.instructionsIconWrapper}>
            <SVG.Camera />
          </View>
          <Text style={styles.instructionsText}>
            {t('paymentInstructions.instructions')}
          </Text>
        </View>
        <AccountNumber
          accountNumber="GE48BG0000000905231300"
          style={styles.accountNumber}
        />
        <PayGuide style={styles.payGuide} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentInstructions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  instructions: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    marginTop: 20,
    alignItems: 'flex-start',
    backgroundColor: colors.blackOp1,
  },
  instructionsIconWrapper: {
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 11,
    marginRight: 10,
    marginTop: 5,
  },
  instructionsText: {
    fontSize: 14,
  },
  accountNumber: {
    marginTop: 26,
    marginHorizontal: 15,
  },
  payGuide: {
    marginHorizontal: 15,
    marginTop: 12,
  },
});
