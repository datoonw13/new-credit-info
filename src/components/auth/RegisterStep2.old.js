import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import AuthSubmitButton from './AuthSubmitButton';
import {Divider} from 'react-native-elements';
import {translate} from '../../services/localizeService';
import {useDispatch} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import CusInput from '../shared/CusInput';
import zxc from 'zxcvbn';
import i18n from 'i18n-js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GRAY8} from '../../theme/colors';
import {
  getCostumerInfoAction,
  setRegisterSelectedStepAction,
  signUpAction,
} from '../../store/ducks/authDuck';
import RegisterPasswordStrength from './RegisterPasswordStrength';

const RegisterStep2 = ({lastStep, registerData, isPerson}) => {
  const dispatch = useDispatch();
  const [passwordScore, setPasswordScore] = React.useState(0);
  const [repeatPasswordSTE, setRepeatPasswordSTE] = React.useState(true);
  const [passwordSTE, setPasswordSTE] = React.useState(true);
  const {control, handleSubmit, errors, watch, setValue} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      userName: !registerData.userName ? '' : registerData.userName,
      repeatUserName: !registerData.userName ? '' : registerData.userName,
      firstName: !registerData.firstName ? '' : registerData.firstName,
      lastName: !registerData.lastName ? '' : registerData.lastName,
      password: '',
      repeatPassword: '',
    },
  });

  React.useEffect(() => {
    if (lastStep !== 2) {
      if (registerData.userName) {
        setValue('userName', registerData.userName);
        setValue('repeatUserName', registerData.userName);
        setValue('firstName', registerData.firstName);
        setValue('lastName', registerData.lastName);
      } else {
        dispatch(getCostumerInfoAction(0));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, registerData]);

  const onSubmit = (data) => {
    if (lastStep === 2) {
      dispatch(
        signUpAction({
          ...data,
          ...registerData,
        }),
      );
    } else {
      dispatch(setRegisterSelectedStepAction(3));
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Controller
            name="userName"
            control={control}
            render={({onChange, onBlur, value}) => (
              <CusInput
                placeholder={translate(
                  isPerson ? 'PERSONAL_NUMBER' : 'IDENTIFICATION_CODE',
                )}
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                maxLength={isPerson ? 11 : 9}
                keyboardType="number-pad"
                errorMessage={
                  errors.userName &&
                  translate(
                    isPerson
                      ? 'VALID_PERSONAL_NUMBER'
                      : 'VALID_IDENTIFICATION_CODE',
                  )
                }
                label={translate(
                  isPerson ? 'PERSONAL_NUMBER' : 'IDENTIFICATION_CODE',
                )}
                editable={lastStep === 2}
              />
            )}
            rules={{
              required: true,
              minLength: isPerson ? 11 : 9,
              pattern: /^\d*$/,
            }}
          />
          <Controller
            name="repeatUserName"
            control={control}
            render={({onChange, onBlur, value}) => (
              <CusInput
                placeholder={translate(
                  isPerson
                    ? 'REPEAT_PERSONAL_NUMBER'
                    : 'REPEAT_IDENTIFICATION_CODE',
                )}
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                maxLength={isPerson ? 11 : 9}
                keyboardType="number-pad"
                errorMessage={
                  errors.repeatUserName &&
                  translate(
                    isPerson
                      ? 'VALID_REPEAT_PERSONAL_NUMBER'
                      : 'VALID_REPEAT_IDENTIFICATION_CODE',
                  )
                }
                label={translate(
                  isPerson
                    ? 'REPEAT_PERSONAL_NUMBER'
                    : 'REPEAT_IDENTIFICATION_CODE',
                )}
                editable={lastStep === 2}
              />
            )}
            rules={{
              required: true,
              validate: (value) => value === watch('userName'),
            }}
          />
          <Controller
            name="firstName"
            control={control}
            render={({onChange, onBlur, value}) => (
              <CusInput
                placeholder={translate('FIRST_NAME')}
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                maxLength={35}
                errorMessage={errors.firstName && translate('VALID_FIRST_NAME')}
                label={translate('FIRST_NAME')}
                editable={lastStep === 2}
              />
            )}
            rules={{
              required: true,
              pattern: i18n.locale === 'ka' ? /^[ა-ჰ]*$/ : /^[A-Za-z]*$/,
            }}
          />
          {isPerson ? (
            <Controller
              name="lastName"
              control={control}
              render={({onChange, onBlur, value}) => (
                <CusInput
                  placeholder={translate('LAST_NAME')}
                  onBlur={onBlur}
                  onChangeText={(val) => onChange(val)}
                  value={value}
                  maxLength={35}
                  errorMessage={errors.lastName && translate('VALID_LAST_NAME')}
                  label={translate('LAST_NAME')}
                  editable={lastStep === 2}
                />
              )}
              rules={{
                required: true,
                pattern: i18n.locale === 'ka' ? /^[ა-ჰ]*$/ : /^[A-Za-z]*$/,
              }}
            />
          ) : null}
          <Controller
            name="password"
            control={control}
            render={({onChange, onBlur, value}) => (
              <CusInput
                placeholder={translate('PASSWORD')}
                onBlur={onBlur}
                onChangeText={(val) => {
                  onChange(val);
                  setPasswordScore(zxc(val).score);
                }}
                value={value}
                maxLength={35}
                label={translate('PASSWORD')}
                secureTextEntry={passwordSTE}
                rightIcon={
                  <Ionicons
                    name={passwordSTE ? 'eye-off' : 'eye'}
                    size={22}
                    color={GRAY8}
                  />
                }
                rightIconPressHandler={() => setPasswordSTE(!passwordSTE)}
                editable={lastStep === 2}
                errorStyle={{height: 0}}
              />
            )}
            rules={{
              required: true,
              validate: () => passwordScore >= 3,
            }}
          />
          <RegisterPasswordStrength score={passwordScore} />
          <Controller
            name="repeatPassword"
            control={control}
            render={({onChange, onBlur, value}) => (
              <CusInput
                placeholder={translate('REPEAT_PASSWORD')}
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                maxLength={35}
                errorMessage={
                  errors.repeatPassword && translate('VALID_REPEAT_PASSWORD')
                }
                label={translate('REPEAT_PASSWORD')}
                secureTextEntry={repeatPasswordSTE}
                rightIcon={
                  <Ionicons
                    name={repeatPasswordSTE ? 'eye-off' : 'eye'}
                    size={22}
                    color={GRAY8}
                  />
                }
                rightIconPressHandler={() =>
                  setRepeatPasswordSTE(!repeatPasswordSTE)
                }
                editable={lastStep === 2}
              />
            )}
            rules={{
              required: true,
              validate: (value) => value === watch('password'),
            }}
          />
        </ScrollView>
        <Divider />
        <AuthSubmitButton
          text={'CONTINUE'}
          onPress={() =>
            lastStep === 2 ? handleSubmit(onSubmit)() : onSubmit()
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
});

export default RegisterStep2;
