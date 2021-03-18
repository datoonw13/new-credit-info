import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import * as colors from 'theme/colors';
import {BaseHeader, LightAction} from 'components';
import {Account, PinKeyboard, PinLine} from './components';
import {useTranslation} from 'react-i18next';
import {dummyUser} from './config';
import {useNavigation} from '@react-navigation/core';

const SignInPass = () => {
  const {t} = useTranslation();
  const [pinNumber, setPinNumber] = useState(0);
  const {navigate} = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView />
      <BaseHeader />
      <View style={styles.wrapper}>
        <View style={styles.accountWrapper}>
          <Account image={dummyUser.image} user={dummyUser.name} />
          <LightAction
            text="signInPass.otherUser"
            style={styles.otherUser}
            color={colors.blackOp5}
            onPress={() => navigate('Auth')}
          />
        </View>
        <Text style={styles.enterPinText}>{t('signInPass.title')}</Text>
        <PinLine fillNumber={pinNumber} style={styles.pinLine} />
        <PinKeyboard onPress={setPinNumber} />
      </View>
      <LightAction
        text="signInPass.forgotPasscode"
        style={styles.forgotPasscode}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
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
  accountWrapper: {
    width: '100%',
    backgroundColor: colors.whiteOp5,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 55,
    marginTop: 32,
  },
  otherUser: {
    marginTop: 20,
    marginLeft: 20,
  },
  forgotPasscode: {
    alignSelf: 'flex-end',
    marginTop: 50,
    marginRight: 20,
  },
});

export default SignInPass;
