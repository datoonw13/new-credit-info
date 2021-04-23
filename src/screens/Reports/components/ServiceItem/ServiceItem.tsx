import React from 'react';
import {StyleSheet, Switch, TouchableOpacity, View} from 'react-native';
import * as SVG from 'assets/svg';
import {Text} from 'components';
import {colors} from 'theme';
import {useTranslation} from 'react-i18next';
import useServiceItem from './useServiceItem';

const ServiceItem: ServiceItemFC = ({
  marginedLeft = false,
  marginedRight = false,
  serviceType,
  onPress,
}) => {
  const {price, isYearly, setIsYearly} = useServiceItem();
  const {t} = useTranslation();
  const title =
    serviceType === 'PREMIUM'
      ? 'serviceScreen.premium'
      : 'serviceScreen.standard';

  const ServiceIcon =
    serviceType === 'PREMIUM'
      ? SVG.PremiumServiceWhite
      : SVG.StandardServiceWhite;

  return (
    <View
      style={[
        styles.container,
        marginedLeft && styles.marginedLeft,
        marginedRight && styles.marginedRight,
      ]}>
      <View
        style={[
          styles.serviceIconWrapper,
          serviceType === 'STANDARD' && styles.blueBg,
          serviceType === 'PREMIUM' && styles.crimsonBg,
        ]}>
        <ServiceIcon />
      </View>
      <Text style={styles.title}>{t(title)}</Text>
      <Text style={styles.price}>{`₾ ${price}`}</Text>
      <View style={styles.priceSwitcherWrapper}>
        <Text>{t('dates.month')}</Text>
        <Switch value={isYearly} onValueChange={setIsYearly} />
        <Text>{t('dates.year')}</Text>
      </View>
      <TouchableOpacity style={styles.purchaseButton} onPress={onPress}>
        <SVG.Purchase />
        <Text style={styles.purchaseTitle}>{t('subscribe')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 16,
    borderRadius: 18,
  },
  marginedLeft: {
    marginLeft: 7,
  },
  marginedRight: {
    marginRight: 7,
  },
  serviceIconWrapper: {
    width: 52,
    height: 32,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBg: {
    backgroundColor: colors.strangeBlue,
  },
  crimsonBg: {
    backgroundColor: colors.crimson,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  priceSwitcherWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 27,
  },
  purchaseButton: {
    width: '80%',
    height: 42,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 26,
    justifyContent: 'center',
    backgroundColor: colors.greenOp1,
    marginTop: 26,
    alignSelf: 'center',
  },
  purchaseTitle: {
    marginLeft: 10,
    color: colors.green,
  },
});
