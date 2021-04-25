import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import Text from 'components/Text';
import Divider from 'components/Divider';
import SubscribeButton from 'components/SubscribeButton';
import {PackageFC} from './types';
import {colors} from 'theme';
import {Icons, switchTrackColors} from './config';
import {useTranslation} from 'react-i18next';
import usePackage from './usePackage';

const Package: PackageFC = ({style, service, onSubscribePress}) => {
  const {actionGroups} = service;
  const {t} = useTranslation();
  const {
    price,
    timeRange,
    switchValue,
    serviceTitle,
    onSwitchValueChange,
  } = usePackage(service);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.dropdown} />
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.pricingContainer}>
            <Text style={styles.currencyText}>₾</Text>
            <Text style={styles.priceText}>{price!.toString()}</Text>
            <Text style={styles.timeRangeText}>{timeRange}</Text>
          </View>
          <View style={styles.switchPlansWrapper}>
            <View>
              <Text
                style={[
                  styles.planTexts,
                  switchValue === false && styles.inactiveText,
                ]}>
                {t('dates.month')}
              </Text>
              <Text
                style={[
                  styles.planTexts,
                  switchValue === true && styles.inactiveText,
                ]}>
                {t('dates.year')}
              </Text>
            </View>
            <Switch
              value={switchValue}
              trackColor={switchTrackColors}
              thumbColor={colors.white}
              style={styles.planSwitcher}
              onValueChange={onSwitchValueChange}
            />
          </View>
        </View>

        <Text style={styles.serviceTitle} caps>
          {serviceTitle}
        </Text>
        <Text style={styles.serviceDescription}>
          {t('serviceScreen.motivateText')}
        </Text>
        <Divider width="100%" />

        {actionGroups.map(({id, name}) => {
          const Icon = Icons[id];
          const AGIcon = Icon ? <Icon /> : <Text children="IC" />;
          return (
            <View style={styles.serviceUnitWrapper} key={id}>
              <View style={styles.serviceUnitIconContainer}>{AGIcon}</View>
              <Text style={styles.serviceUnitText} dontTranslate>
                {name}
              </Text>
            </View>
          );
        })}

        <SubscribeButton
          onPress={onSubscribePress!}
          visible={!!onSubscribePress}
        />
      </View>
    </View>
  );
};

export default Package;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdown: {
    backgroundColor: colors.blackOp05,
    height: '92%',
    width: '104%',
    left: '-2%',
    top: '4%',
    zIndex: -1,
    position: 'absolute',
    borderRadius: 20,
  },
  innerContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 26,
    paddingHorizontal: 22,
    minHeight: 400,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.blackOp05,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pricingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyText: {
    fontSize: 32,
    color: colors.black,
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
    marginLeft: 10,
  },
  switchPlansWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  planSwitcher: {
    transform: [
      {
        rotateZ: '-90deg',
      },
    ],
  },
  planTexts: {
    fontSize: 14,
    color: colors.black,
  },
  inactiveText: {
    color: colors.blackOp5,
  },
  serviceTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 19,
  },
  serviceDescription: {
    fontSize: 14,
    marginTop: 8,
    color: colors.blackOp5,
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
});
