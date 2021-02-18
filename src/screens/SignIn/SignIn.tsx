import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Platform,
  Switch,
  Text,
  View,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {Controller} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as colors from 'theme/colors';
import {FIRAGO_BOLD, FIRAGO_REGULAR} from 'theme/fonts';
import {RedGirl} from 'assets/svg';
import {Input, Button, HeaderWithLogo, AuthFooter} from 'components';
import useSignIn from './useSignIn';

const SignIn = () => {
  const {
    setPasswordVisible,
    passwordVisible,
    footerHandler,
    scrollViewRef,
    toggleSwitch,
    handleSubmit,
    onSubmit,
    control,
    errors,
  } = useSignIn();
  return (
    <>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
        <HeaderWithLogo mode="WithMenu" style={styles.header} />
        <ScrollView style={{flex: 1}} ref={scrollViewRef}>
          <RedGirl style={styles.redGirl} />
          <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.authText}>{translate('AUTHORIZATION')}</Text>
              <Text style={styles.descText}>
                {translate('FILL_GIVEN_FIELDS')}
              </Text>
            </View>
            <Controller
              name="username"
              control={control}
              render={({onChange, onBlur, value}) => (
                <Input
                  autoCapitalize="none"
                  placeholder="username"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={
                    errors.username && 'Please enter valid username'
                  }
                  label={'USER'}
                  labelOnBorderToo
                />
              )}
              rules={
                {
                  // required: true,
                }
              }
            />
            <Divider />
            <Controller
              name="password"
              control={control}
              render={({onChange, onBlur, value}) => (
                <Input
                  onBlur={onBlur}
                  value={value}
                  maxLength={35}
                  label={'PASSWORD'}
                  secureTextEntry={passwordVisible}
                  rightIconPressHandler={() =>
                    setPasswordVisible(!passwordVisible)
                  }
                  onChangeText={onChange}
                  rightIcon={
                    <Ionicons
                      name={passwordVisible ? 'eye-off' : 'eye'}
                      color={colors.gray}
                      size={22}
                    />
                  }
                />
              )}
              rules={
                {
                  // required: true,
                }
              }
            />
            <Divider />
            <View style={styles.saveWrapper}>
              <Switch
                trackColor={{false: colors.GRAY2, true: colors.GREEN1}}
                thumbColor={colors.white}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={saveIsEnabled}
              />
              <Text style={styles.saveText}>{translate('SAVE')}</Text>
              <TouchableOpacity>
                <Text style={styles.forgetText}>
                  {translate('FORGET_PASSWORD') + '?'}
                </Text>
              </TouchableOpacity>
            </View>
            <Divider />
            <Button
              text="LOGIN"
              touchableStyle={styles.authBtn}
              onPress={handleSubmit(onSubmit)}
            />
            <Divider />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <AuthFooter
        text={translate('NO_ACCOUNT')}
        link={translate('REGISTRATION')}
        handler={footerHandler}
        mode="link"
      />
    </>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flexGrow: 1,
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
    fontFamily: FIRAGO_BOLD,
    fontSize: 24,
    color: colors.black,
  },
  descText: {
    marginTop: 12,
    marginBottom: 32,
    fontFamily: FIRAGO_REGULAR,
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
    fontFamily: FIRAGO_REGULAR,
    flex: 1,
  },
  forgetText: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: FIRAGO_REGULAR,
  },
  authBtn: {
    marginTop: 18,
  },
});
