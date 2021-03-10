import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider, Text} from 'components';
import {PackageFC} from './types';
import {colors} from 'theme';
import {Icons} from './config';
import {useTranslation} from 'react-i18next';

const Package: PackageFC = ({style, service}) => {
  const {
    organizationalProductType,
    actionGroups,
    monthlyPrice,
    yearlyPrice,
  } = service;
  const {t} = useTranslation();

  const price = monthlyPrice ?? yearlyPrice;
  const numberOfMonths = monthlyPrice ? 1 : 12;
  const timeRange = `/ ${numberOfMonths} ${t('month')}`;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.pricingContainer}>
        <View style={styles.currencyContainer}>
          <Text style={styles.currencyText}>₾</Text>
        </View>
        <Text style={styles.priceText}>{price!.toString()}</Text>
        <Text style={styles.timeRangeText}>{timeRange}</Text>
      </View>
      <Text style={styles.serviceTitle} caps>
        {organizationalProductType === 'STANDARD'
          ? t('serviceScreen.standard')
          : t('serviceScreen.premium')}
      </Text>
      <Divider width="100%" />

      {actionGroups.map(({id, name}) => {
        const Icon = Icons[id];
        const AGIcon = Icon ? <Icon /> : <Text children="IC" />;
        return (
          <View style={styles.serviceUnitWrapper} key={id}>
            <View
              style={[
                styles.serviceUnitIconContainer,
                // !active && styles.serviceUnitInactiveIcon,
              ]}>
              {AGIcon}
            </View>
            <Text
              style={[
                styles.serviceUnitText,
                // !active && styles.serviceUnitInactiveText,
              ]}
              dontTranslate>
              {name}
            </Text>
          </View>
        );
      })}
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
    minHeight: 400,
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
