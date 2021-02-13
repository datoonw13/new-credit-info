import React, {useState} from 'react';
import {
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {Controller, useForm} from 'react-hook-form';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {signInAction} from '../../store/ducks/authDuck';
import {colors} from '../../services/theme.js';
import {translate} from '../../services/localizeService';
import {BLACK, BLUE, GRAY2, GREEN1, RED1, WHITE} from '../../theme/colors';
import CusInput from '../../components/shared/CusInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FIRAGO_BOLD, FIRAGO_REGULAR, FIRAGO_MEDIUM} from '../../theme/fonts';
import HeaderWithLogo from '../../components/shared/HeaderWithLogo';
import AuthFooter from '../../components/auth/AuthFooter';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const {control, handleSubmit, errors, setValue} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const [saveIsEnabled, setSaveIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setSaveIsEnabled((previousState) => !previousState);

  const onSubmit = async ({username, password}) => {
    Keyboard.dismiss();
    dispatch(
      signInAction({
        // username,
        // password,
        // username: '001130052215',
        // password: '123asdASD!@#',
        username: '00000000098',
        password: 'asdASD123!@#',
      }),
    );
    try {
    } catch (e) {
      console.log(e);
    }
  };

  const footerHandler = () => {
    setValue('email', '');
    setValue('password', '');
    navigation.navigate('SignUp');
  };

  return (
    <>
      <ScrollView>
        <HeaderWithLogo mode="WithMenu" style={styles.header} />
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
              <CusInput
                autoCapitalize="none"
                placeholder="username"
                leftIcon={<FontAwesome name="user-o" size={22} color={BLACK} />}
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                errorMessage={errors.username && 'Please enter valid username'}
                label={translate('USER')}
              />
            )}
            rules={
              {
                // required: true,
              }
            }
          />
          <Controller
            name="password"
            control={control}
            render={({onChange, onBlur, value}) => (
              <CusInput
                testID="PasswordInput"
                secureTextEntry={true}
                placeholder="password"
                leftIcon={
                  <AntDesign name="unlock" size={22} color={colors.grey} />
                }
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                errorMessage={errors.password && 'Please enter password'}
                label={translate('PASSWORD')}
              />
            )}
            rules={
              {
                // required: true,
              }
            }
          />
          <View style={styles.saveWrapper}>
            <Switch
              trackColor={{false: GRAY2, true: GREEN1}}
              thumbColor={WHITE}
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
          <TouchableOpacity
            style={styles.button}
            testID="SignUpButton"
            title="Sign Up"
            onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>{translate('LOGIN')}</Text>
          </TouchableOpacity>
          <Divider />
        </View>
      </ScrollView>
      <AuthFooter
        text={translate('NO_ACCOUNT')}
        link={translate('REGISTRATION')}
        handler={footerHandler}
        mode="link"
      />
    </>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    marginBottom: 42,
  },
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  wrapper: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: WHITE,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  titleWrapper: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  authText: {
    fontFamily: FIRAGO_BOLD,
    fontSize: 24,
    color: BLACK,
  },
  descText: {
    marginTop: 12,
    marginBottom: 32,
    fontFamily: FIRAGO_REGULAR,
    fontSize: 12,
    color: BLACK,
    opacity: 0.3,
  },
  saveWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveText: {
    paddingLeft: Platform.OS === 'ios' ? 10 : 5,
    color: BLACK,
    opacity: 0.3,
    fontSize: 12,
    fontFamily: FIRAGO_REGULAR,
    flex: 1,
  },
  forgetText: {
    color: BLUE,
    fontSize: 12,
    fontFamily: FIRAGO_REGULAR,
  },
  button: {
    marginTop: 25,
    borderRadius: 18,
    backgroundColor: RED1,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: WHITE,
    fontFamily: FIRAGO_MEDIUM,
    fontSize: 14,
  },
});

export default SignIn;
