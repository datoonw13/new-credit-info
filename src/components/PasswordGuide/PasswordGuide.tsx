import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Info} from 'assets/svg';
import Text from 'components/Text';
import {colors} from 'theme';
import {PasswordGuideFC} from './types';
import {useTranslation} from 'react-i18next';

const PasswordGuid: PasswordGuideFC = ({style}) => {
  const {t} = useTranslation();
  return (
    <View style={[styles.setPasswordGuide, style]}>
      <View style={styles.infoIconWrapper}>
        <Info />
      </View>
      <View style={styles.guideTextWrapper}>
        <Text
          children={t('registration.passwordGuideTitle')}
          style={styles.guideTextBold}
          dontTranslate
        />
        <Text
          children={t('registration.passwordGuideDescription')}
          style={styles.guideTextNorm}
          dontTranslate
        />
      </View>
    </View>
  );
};

export default PasswordGuid;

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
  },
  guideTextWrapper: {
    flex: 1,
  },
  guideTextBold: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  guideTextNorm: {
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
    marginRight: 30,
  },
});
