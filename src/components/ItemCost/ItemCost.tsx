import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import Text from 'components/Text';
import {colors} from 'theme';

const ItemCost: ItemCostFC = ({amount, description}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.itemPriceContainer}>
      <Text style={styles.itemPriceDescription}>{t(description)}</Text>
      <Text style={styles.itemPrice}>{`${amount} ₾`}</Text>
    </View>
  );
};

export default ItemCost;

const styles = StyleSheet.create({
  itemPriceContainer: {
    height: 95,
    borderWidth: 1,
    borderColor: colors.blackOp1,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginHorizontal: 10,
  },
  itemPriceDescription: {
    marginBottom: 6,
    fontSize: 14,
  },
  itemPrice: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
