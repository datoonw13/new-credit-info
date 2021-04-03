import Text from 'components/Text';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors} from 'theme';

const Verification: VerificationFC = ({verified, onVerifyPress}) => {
  const {t} = useTranslation();

  if (verified === false) {
    return (
      <TouchableOpacity
        style={[styles.container, styles.verification]}
        onPress={onVerifyPress}>
        <Text>{t('updatePersonalData.verification')}</Text>
      </TouchableOpacity>
    );
  }

  if (verified === true) {
    return (
      <View style={[styles.container, styles.verified]}>
        <Text style={styles.verifiedText}>
          {t('updatePersonalData.verified')}
        </Text>
      </View>
    );
  }

  return null;
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    top: 5,
    zIndex: 10,
    padding: 12,
    borderRadius: 20,
  },

  verification: {
    backgroundColor: colors.blackOp1,
  },
  verified: {
    backgroundColor: colors.greenOp2,
  },
  verifiedText: {
    color: colors.green,
  },
});
