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
import {
  resetRegisterDataAction,
  setRegisterSelectedStepAction,
} from 'store/ducks/authDuck';
import {useDispatch, useSelector} from 'react-redux';
import * as colors from 'theme/colors';
import {FIRAGO_BOLD, FIRAGO_REGULAR} from 'theme/fonts';
import {HeaderWithLogo, AuthFooter, Text} from 'components';
import {
  SetAdditionalInfo,
  SetPersonalInfo,
  ChooseEntity,
  AcceptTerms,
  SetPassword,
  VerifyPhone,
} from './components';
import {RegistrationSteps} from './enum';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const {registerSelectedStep, registerLastStep, registerData} = useSelector(
    (state) => state.authReducer,
  );

  React.useEffect(() => {
    return () => {
      dispatch(resetRegisterDataAction());
    };
  }, [dispatch]);

  const footerHandler = () => {
    registerSelectedStep === 1
      ? navigate('SignIn')
      : dispatch(setRegisterSelectedStepAction(registerSelectedStep - 1));
  };

  const setTabData = () => {
    switch (registerSelectedStep) {
      case RegistrationSteps.ChooseEntity:
        return (
          <ChooseEntity
            lastStep={registerLastStep}
            customerType={registerData.customerType}
          />
        );
      case RegistrationSteps.SetPersonalInfo:
        return (
          <SetPersonalInfo
            lastStep={registerLastStep}
            registerData={registerData}
            isPerson={registerData.customerType === 'PERSON'}
          />
        );
      case RegistrationSteps.SetPassword:
        return (
          <SetPassword
            lastStep={registerLastStep}
            registerData={registerData}
          />
        );
      case RegistrationSteps.SetAdditionalInfo:
        return (
          <SetAdditionalInfo
            lastStep={registerLastStep}
            registerData={registerData}
            isPerson={registerData.customerType === 'PERSON'}
          />
        );
      case RegistrationSteps.AcceptTerms:
        return <AcceptTerms lastStep={registerLastStep} />;
      case RegistrationSteps.VerifyPhone:
        return <VerifyPhone registerData={registerData} />;
      default:
        return null;
    }
  };

  return (
    <>
      <HeaderWithLogo mode="WithMenu" style={styles.header} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
          <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.authText} children="REGISTRATION" />
              <Text style={styles.descText} children="SELECT_SERVICE_TYPE" />
            </View>
            <Divider />
            {setTabData()}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      {registerSelectedStep === 1 ? (
        <AuthFooter
          text="HAVE_ACCOUNT"
          link="AUTHORIZATION"
          handler={footerHandler}
          mode="link"
        />
      ) : (
        <AuthFooter handler={footerHandler} mode="goback" />
      )}
    </>
  );
};

const styles = StyleSheet.create({
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

export default SignUp;
