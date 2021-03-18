import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import * as colors from 'theme/colors';
import {BaseHeader} from 'components';
import {PinKeyboard, PinLine} from './components';
import {useTranslation} from 'react-i18next';

const SignInPass = () => {
  const {t} = useTranslation();
  const [pinNumber, setPinNumber] = useState(0);

  return (
    <ScrollView>
      <SafeAreaView />
      <BaseHeader />
      <View style={styles.wrapper}>
        <Text style={styles.enterPinText}>{t('signInPass.title')}</Text>
        <PinLine fillNumber={pinNumber} style={styles.pinLine} />
        <PinKeyboard onPress={setPinNumber} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  enterPinText: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.black,
    marginBottom: 22,
  },
  pinLine: {
    marginBottom: 42,
  },
});

export default SignInPass;
