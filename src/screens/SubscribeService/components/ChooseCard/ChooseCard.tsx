import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Text, Button, Select} from 'components';
import {colors} from 'theme';
import * as SVG from 'assets/svg';

const ChooseCard: ChooseCardFC = ({visible}) => {
  const {t} = useTranslation();
  const [selectVisible, setSelectVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(dummyData[0]);
  const cardKeyExtractor = ({id}: any) => id + '';
  const cardValueExtractor = ({number}: any) => number;

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
        <TouchableOpacity
          style={styles.chooseCardSelect}
          onPress={() => setSelectVisible(true)}>
          <View style={styles.chooseCardSelectInnerLeftContainer}>
            <SVG.CreditCard style={styles.chooseCardIcon} />
            <Text>{activeCard.number}</Text>
          </View>
          <SVG.Arrow style={styles.chooseCardArrowIcon} />
        </TouchableOpacity>
      </View>
      <Button text="next" />
      <Select
        data={dummyData}
        visible={selectVisible}
        activeElement={activeCard}
        keyExtractor={cardKeyExtractor}
        setActiveElement={setActiveCard}
        title="subscribeService.chooseCard"
        setSelectVisible={setSelectVisible}
        valueExtractor={cardValueExtractor}
      />
    </View>
  );
};

const dummyData = [
  {
    id: 1,
    number: '5647 **** **** 7463',
  },
  {
    id: 2,
    number: '3097 **** **** 7161',
  },
  {
    id: 3,
    number: '8910 **** **** 8712',
  },
  {
    id: 4,
    number: '3097 **** **** 7161',
  },
  {
    id: 5,
    number: '8910 **** **** 8712',
  },
  {
    id: 6,
    number: '5647 **** **** 7463',
  },
  {
    id: 7,
    number: '3097 **** **** 7161',
  },
  {
    id: 8,
    number: '8910 **** **** 8712',
  },
  {
    id: 9,
    number: '5647 **** **** 7463',
  },
];

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
