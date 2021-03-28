import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {BaseHeader, LightAction, PinKeyboard, PinLine} from 'components';
import {AuthWithPasswordModal, Account} from './components';
import useSignInPass from './useSignInPass';
import * as colors from 'theme/colors';
import {dummyUser} from './config';

const SignInPass = () => {
  const {
    onAuthModalBackdropPress,
    onForgotPasswordPress,
    setForgotPasscode,
    onOtherUserPress,
    passcodeLength,
    forgotPasscode,
    watchKeyboard,
    t,
  } = useSignInPass();

  return (
    <ScrollView style={styles.container}>
      <AuthWithPasswordModal
        onBackdropPress={onAuthModalBackdropPress}
        setVisible={setForgotPasscode}
        visible={forgotPasscode}
      />
      <SafeAreaView />
      <BaseHeader />
      <View style={styles.wrapper}>
        <View style={styles.accountWrapper}>
          <Account image={dummyUser.image} user={dummyUser.name} />
          <LightAction
            text="signInPass.otherUser"
            style={styles.otherUser}
            color={colors.blackOp5}
            onPress={onOtherUserPress}
          />
        </View>
        <Text style={styles.enterPinText}>{t('signInPass.title')}</Text>
        <PinLine fillNumber={passcodeLength} style={styles.pinLine} />
        <PinKeyboard onPress={watchKeyboard} />
      </View>
      <LightAction
        text="signInPass.forgotPasscode"
        onPress={onForgotPasswordPress}
        style={styles.forgotPasscode}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    position: 'relative',
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
    backgroundColor: colors.white,
    paddingTop: 15,
    paddingBottom: 20,
    borderRadius: 10,
    marginBottom: 55,
    marginTop: 32,
    zIndex: 12,
    position: 'relative',
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
