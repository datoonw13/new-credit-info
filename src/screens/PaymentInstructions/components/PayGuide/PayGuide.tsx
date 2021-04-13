import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Info} from 'assets/svg';
import Text from 'components/Text';
import {colors} from 'theme';
import {PayGuideFC} from './types';
import {useTranslation} from 'react-i18next';

const PayGuide: PayGuideFC = ({style}) => {
  const {t} = useTranslation();
  return (
    <View style={[styles.setPasswordGuide, style]}>
      <View style={styles.infoIconWrapper}>
        <Info />
      </View>
      <View style={styles.guideTextWrapper}>
        <Text
          children={t('paymentInstructions.guideText')}
          style={styles.guideTextNorm}
          dontTranslate
        />
        <Text
          children={t('paymentInstructions.guideTextUnderlined')}
          style={[styles.guideTextNorm, styles.underlined]}
          dontTranslate
        />
      </View>
    </View>
  );
};

export default PayGuide;

const styles = StyleSheet.create({
  setPasswordGuide: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.strangeBlueOp1,
    borderRadius: 18,
    padding: 12,
    marginTop: 5,
    marginBottom: 15,
  },
  infoIconWrapper: {
    width: 32,
    height: 32,
    backgroundColor: colors.blackOp1,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
    marginTop: 8,
  },
  guideTextWrapper: {
    flex: 1,
  },
  guideTextNorm: {
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
    marginRight: 30,
  },
  underlined: {
    textDecorationLine: 'underline',
  },
});
