import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Platform,
  View,
} from 'react-native';
import * as colors from 'theme/colors';
import {RedGirlSearching} from 'assets/svg';
import {HeaderWithLogo, AuthFooter, Text} from 'components';
import ForgotPasswordStep from './components/Step';
import useForgotPassword from './useForgotPassword';

const ForgotPassword = () => {
  const {activeStep} = useForgotPassword();
  return (
    <View style={styles.container}>
      <HeaderWithLogo mode="WithMenu" style={styles.header} />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
        <ScrollView style={styles.scrollViewContainer}>
          <RedGirlSearching style={styles.redGirl} />
          <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
              <Text
                children="forgotPassword.title"
                style={styles.authText}
                capsBold
              />
              <Text
                children="authorization.pleaseFill"
                style={styles.descText}
              />
            </View>
            <ForgotPasswordStep step={activeStep} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <AuthFooter
        text="authorization.areYouNotRegistered"
        link="authorization.register"
        handler={() => {}}
        mode="link"
      />
    </View>
  );
};
export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 10 : 0,
  },
  keyboardAvoidingView: {
    flexGrow: 1,
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
  },
  header: {
    marginBottom: 20,
  },
  redGirl: {
    flex: 1,
    marginTop: 36,
    marginBottom: 32,
    alignSelf: 'center',
  },
  wrapper: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: colors.white,
  },
  titleWrapper: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  authText: {
    fontSize: 24,
    color: colors.black,
  },
  descText: {
    marginTop: 12,
    marginBottom: 32,
    fontSize: 12,
    color: colors.black,
    opacity: 0.3,
  },
  saveWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveText: {
    paddingLeft: Platform.OS === 'ios' ? 10 : 5,
    color: colors.black,
    opacity: 0.3,
    fontSize: 12,
    flex: 1,
  },
  authBtn: {
    marginTop: 18,
  },
});
