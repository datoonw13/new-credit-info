import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {colors} from 'theme';
import {close} from 'utils/modal';
import {GreenTick} from 'assets/svg';
import Text from 'components/Text';
import LightGreyButton from 'components/LightGreyButton';

const SentOTPModal = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.successHeading}>{t('modal.smsCode')}</Text>
      <View style={styles.greenTick}>
        <GreenTick />
      </View>
      <Text style={styles.successText}>{t('modal.sendOTPSuccess')}</Text>
      <LightGreyButton onPress={close} text="ok" />
    </View>
  );
};

export default <SentOTPModal />;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
  },
  greenTick: {
    backgroundColor: colors.secondGreenOp25,
    width: 52,
    height: 52,
    borderRadius: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successHeading: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
  },
  successText: {
    fontSize: 12,
    color: colors.blackOp7,
    textAlign: 'center',
    lineHeight: 20,
  },
});
