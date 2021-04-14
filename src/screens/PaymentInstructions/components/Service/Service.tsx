import React from 'react';
import {StyleSheet, View, Switch} from 'react-native';
import {Text} from 'components';
import * as SVG from 'assets/svg';
import {ServiceFC} from './types';
import {colors} from 'theme';
import {useTranslation} from 'react-i18next';

const Service: ServiceFC = ({
  serviceType,
  onSwitch,
  style,
  value,
  price,
  time,
}) => {
  const {t} = useTranslation();
  const title =
    serviceType === 'PREMIUM'
      ? t('serviceScreen.premium')
      : t('serviceScreen.standard');

  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          {serviceType === 'STANDARD' && <SVG.StandardServiceWhite />}
          {serviceType === 'PREMIUM' && (
            <SVG.PremiumServiceWhite style={styles.premiumIconPosition} />
          )}
        </View>
        <Text style={styles.heading}>{title}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionWrapper}>{time}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <Switch style={styles.switch} value={value} onValueChange={onSwitch} />
      </View>
    </View>
  );
};

export default Service;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 112,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 15,
    display: 'flex',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: colors.crimson,
    padding: 5,
    borderRadius: 15,
    marginRight: 5,
  },
  premiumIconPosition: {
    position: 'relative',
    left: 1,
    bottom: 1,
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionWrapper: {},
  time: {
    fontSize: 12,
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  switch: {
    transform: [
      {
        rotateZ: '270deg',
      },
    ],
  },
});
