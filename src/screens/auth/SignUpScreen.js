import React, {useEffect} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Text,
  View,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {
  setRegisterSelectedStepAction,
  setRegisterLastStepAction,
} from '../../store/ducks/authDuck';
import {useDispatch, useSelector} from 'react-redux';
import HeaderWithLogo from '../../components/shared/HeaderWithLogo';
import {BLACK, WHITE} from '../../theme/colors';
import AuthFooter from '../../components/auth/AuthFooter';
import {translate} from '../../services/localizeService';
import {FIRAGO_BOLD, FIRAGO_REGULAR} from '../../theme/fonts';
import RegisterStep1 from '../../components/auth/RegisterStep1';
import RegisterStep2 from '../../components/auth/RegisterStep2';
import RegisterStep3 from '../../components/auth/RegisterStep3';
import RegisterStep4 from '../../components/auth/RegisterStep4';
import RegisterStep5 from '../../components/auth/RegisterStep5';
import RegisterStep6 from '../../components/auth/RegisterStep6';

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {registerSelectedStep, registerLastStep, registerData} = useSelector(
    (state) => state.authReducer,
  );

  // useEffect(() => {
  //   dispatch(setRegisterSelectedStepAction(3));
  //   dispatch(setRegisterLastStepAction(3));
  // }, []);

  const footerHandler = () => {
    registerSelectedStep === 1
      ? navigation.navigate('SignIn')
      : dispatch(setRegisterSelectedStepAction(registerLastStep - 1));
  };

  const setTabData = () => {
    switch (registerSelectedStep) {
      case 1:
        return (
          <RegisterStep1
            lastStep={registerLastStep}
            customerType={registerData.customerType}
          />
        );
      case 2:
        return (
          <RegisterStep2
            lastStep={registerLastStep}
            registerData={registerData}
            isPerson={registerData.customerType === 'PERSON'}
          />
        );
      case 3:
        return (
          <RegisterStep3
            lastStep={registerLastStep}
            registerData={registerData}
            isPerson={registerData.customerType === 'PERSON'}
          />
        );
      case 4:
        return (
          <RegisterStep4
            lastStep={registerLastStep}
            registerData={registerData}
            isPerson={registerData.customerType === 'PERSON'}
          />
        );
      case 5:
        return <RegisterStep5 lastStep={registerLastStep} />;
      case 6:
        return (
          <RegisterStep6
            lastStep={registerLastStep}
            registerData={registerData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <HeaderWithLogo mode="WithMenu" style={styles.header} />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.authText}>{translate('REGISTRATION')}</Text>
            <Text style={styles.descText}>
              {translate('SELECT_SERVICE_TYPE')}
            </Text>
          </View>
          <Divider />
          {setTabData()}
        </View>
      </KeyboardAvoidingView>
      {registerSelectedStep === 1 ? (
        <AuthFooter
          text={translate('HAVE_ACCOUNT')}
          link={translate('AUTHORIZATION')}
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
    backgroundColor: WHITE,
  },
  header: {
    marginBottom: 42,
  },
  keyboardAvoidingView: {
    flexGrow: 1,
    flex: 1,
  },
  contentContainerStyle: {
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  wrapper: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: WHITE,
  },
  titleWrapper: {
    alignItems: 'center',
  },
  authText: {
    color: BLACK,
    fontSize: 24,
    fontFamily: FIRAGO_BOLD,
    marginBottom: 15,
  },
  descText: {
    color: BLACK,
    opacity: 0.3,
    fontSize: 12,
    fontFamily: FIRAGO_REGULAR,
  },
});

export default SignUpScreen;
