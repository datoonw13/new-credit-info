import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PinKeyboard, PinLine} from 'components';
import {useTranslation} from 'react-i18next';

const PasscodeInput: PasscodeInputFC = ({
  onPasscodeChange,
  valueLength,
  title,
}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.innerTopContainer}>
        <Text style={styles.title}>{t(title)}</Text>
        <PinLine fillNumber={valueLength} />
      </View>
      <PinKeyboard onPress={onPasscodeChange} withoutFingerprint />
    </View>
  );
};

export default PasscodeInput;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerTopContainer: {
    marginBottom: 140,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 16,
    marginBottom: 50,
  },
});
