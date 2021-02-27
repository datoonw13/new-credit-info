import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider, Text} from 'components';
import {PackageFC} from './types';
import {colors} from 'theme';
import {availableServices} from './config';

const Package: PackageFC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pricingContainer}>
        <View style={styles.currencyContainer}>
          <Text style={styles.currencyText}>₾</Text>
        </View>
        <Text style={styles.priceText}>4.99</Text>
        <Text style={styles.timeRangeText}>/ 1 თვე</Text>
      </View>
      <Text style={styles.serviceTitle} caps>
        სტანდარტული
      </Text>
      <Divider width="100%" />

      {availableServices.map(({id, Icon, active, text}) => (
        <View style={styles.serviceUnitWrapper} key={id}>
          <View
            style={[
              styles.serviceUnitIconContainer,
              !active && styles.serviceUnitInactiveIcon,
            ]}>
            <Icon />
          </View>
          <Text
            style={[
              styles.serviceUnitText,
              !active && styles.serviceUnitInactiveText,
            ]}
            dontTranslate>
            {text}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Package;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    backgroundColor: colors.blackOp05,
    borderRadius: 10,
    paddingVertical: 26,
    paddingHorizontal: 22,
  },
  pricingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyContainer: {
    paddingLeft: 8,
    paddingRight: 6,
    backgroundColor: colors.crimsonOp2,
    borderRadius: 15,
    marginRight: 6,
  },
  currencyText: {
    fontSize: 32,
    color: colors.crimson,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.black,
  },
  timeRangeText: {
    fontSize: 15,
    color: colors.blackOp5,
    marginTop: 8,
  },
  serviceTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 26,
  },
  serviceUnitWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
  serviceUnitIconContainer: {
    backgroundColor: colors.crimsonOp2,
    padding: 7,
    borderRadius: 10,
    marginRight: 8,
  },
  serviceUnitInactiveIcon: {
    backgroundColor: colors.blackOp1,
  },
  serviceUnitText: {
    fontSize: 12,
    color: colors.black,
  },
  serviceUnitInactiveText: {
    color: colors.blackOp8,
  },
});
