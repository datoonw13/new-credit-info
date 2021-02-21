import React from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Keyboard,
  View,
} from 'react-native';
import {Divider} from 'react-native-elements';
import * as colors from 'theme/colors';
import {FIRAGO_BOLD, FIRAGO_REGULAR} from 'theme/fonts';
import {HeaderWithLogo, AuthFooter, Text} from 'components';
import RegistrationStep from './components/RegistrationStep';
import useRegister from './useRegister';

const Register = () => {
  const {
    registerSelectedStep,
    registerLastStep,
    registerData,
    footerHandler,
  } = useRegister();

  return (
    <View style={styles.topContainer}>
      <HeaderWithLogo mode="WithMenu" style={styles.header} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
          <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.authText} children="registration.title" />
              <Text style={styles.descText} children="chooseServiceType" />
            </View>
            <Divider />
            <RegistrationStep
              registerSelectedStep={registerSelectedStep}
              registerLastStep={registerLastStep}
              registerData={registerData}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      {registerSelectedStep === 1 ? (
        <AuthFooter
          text="haveAccount"
          link="auth"
          handler={footerHandler}
          mode="link"
        />
      ) : (
        <AuthFooter handler={footerHandler} mode="goback" />
      )}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    marginBottom: 42,
  },
  keyboardAvoidingView: {
    flexGrow: 1,
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: colors.white,
  },
  titleWrapper: {
    alignItems: 'center',
  },
  authText: {
    color: colors.black,
    fontSize: 24,
    fontFamily: FIRAGO_BOLD,
    marginBottom: 15,
  },
  descText: {
    color: colors.black,
    opacity: 0.3,
    fontSize: 12,
    fontFamily: FIRAGO_REGULAR,
  },
});
