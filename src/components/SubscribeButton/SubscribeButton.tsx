import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import Text from 'components/Text';
import * as SVG from 'assets/svg';
import {colors} from 'theme';

const SubscribeButton: SubscribeButtonFC = ({onPress, visible = true}) => {
  const {t} = useTranslation();

  if (visible === false) {
    return null;
  }
  return (
    <TouchableOpacity style={styles.purchaseButton} onPress={onPress}>
      <SVG.Purchase />
      <Text style={styles.purchaseTitle}>{t('subscribe')}</Text>
    </TouchableOpacity>
  );
};

export default SubscribeButton;

const styles = StyleSheet.create({
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
