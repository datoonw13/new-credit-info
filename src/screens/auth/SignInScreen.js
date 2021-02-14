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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {signInAction} from '../../store/ducks/authDuck';
import {colors} from '../../services/theme.js';
import {translate} from '../../services/localizeService';
import {BLACK, BLUE, GRAY2, GREEN1, WHITE} from '../../theme/colors';
import {FIRAGO_BOLD, FIRAGO_REGULAR} from '../../theme/fonts';
import HeaderWithLogo from '../../components/shared/HeaderWithLogo';
import AuthFooter from '../../components/auth/AuthFooter';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RedGirl} from '../../assets/svg';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';

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
  const [passwordVisible, setPasswordVisible] = useState(true);
  const toggleSwitch = () =>
    setSaveIsEnabled((previousState) => !previousState);

  const onSubmit = async ({username, password}) => {
    Keyboard.dismiss();
    dispatch(
      signInAction({
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
                errorMessage={errors.username && 'Please enter valid username'}
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
              // <Input
              //   errorMessage={errors.password && 'Please enter password'}
              //   onChangeText={onChange}
              //   secureTextEntry={true}
              //   testID="PasswordInput"
              //   label={'PASSWORD'}
              //   onBlur={onBlur}
              //   value={value}
              // />
              <Input
                onBlur={onBlur}
                value={value}
                maxLength={35}
                label={'PASSWORD'}
                secureTextEntry={passwordVisible}
                rightIconPressHandler={() =>
                  setPasswordVisible(!passwordVisible)
                }
                errorStyle={styles.passwordError}
                onChangeText={onChange}
                rightIcon={
                  <Ionicons
                    name={passwordVisible ? 'eye-off' : 'eye'}
                    color={colors.GRAY8}
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
          <Button
            text="LOGIN"
            touchableStyle={styles.authBtn}
            onPress={handleSubmit(onSubmit)}
          />
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
  redGirl: {
    marginTop: 36,
    marginBottom: 32,
    alignSelf: 'center',
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
  authBtn: {
    marginTop: 18,
  },
});

export default SignIn;
