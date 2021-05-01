import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Text, Button} from 'components';
import {colors} from 'theme';
import * as SVG from 'assets/svg';

const ChooseCard: ChooseCardFC = ({visible}) => {
  const {t} = useTranslation();

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.packagePriceContainer}>
        <Text style={styles.packagePriceDescription}>
          {t('subscribeService.standardPackagePrice')}
        </Text>
        <Text style={styles.packagePrice}>12.97 ₾</Text>
      </View>
      <View style={styles.chooseCardWrapper}>
        <Text style={styles.chooseCardTitle}>
          {t('subscribeService.chooseCard')}
        </Text>
        <TouchableOpacity style={styles.chooseCardSelect}>
          <View style={styles.chooseCardSelectInnerLeftContainer}>
            <SVG.CreditCard style={styles.chooseCardIcon} />
            <Text>5647 **** **** 7463</Text>
          </View>
          <SVG.Arrow style={styles.chooseCardArrowIcon} />
        </TouchableOpacity>
      </View>
      <Button text="next" />
    </View>
  );
};

export default ChooseCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  packagePriceContainer: {
    height: 95,
    borderWidth: 1,
    borderColor: colors.blackOp1,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginHorizontal: 10,
  },
  packagePriceDescription: {
    marginBottom: 6,
    fontSize: 14,
  },
  packagePrice: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: 'bold',
  },
  chooseCardWrapper: {
    marginVertical: 24,
  },
  chooseCardTitle: {
    marginBottom: 5,
    marginLeft: 10,
    color: colors.blackOp8,
  },
  chooseCardSelect: {
    height: 62,
    borderWidth: 1,
    borderColor: colors.blackOp1,
    borderRadius: 14,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  chooseCardSelectInnerLeftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chooseCardArrowIcon: {
    transform: [
      {
        rotateZ: '-90deg',
      },
    ],
  },
  chooseCardIcon: {
    marginRight: 12,
  },
});
