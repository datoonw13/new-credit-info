import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import {translate} from '../../services/localizeService';
import {useDispatch} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import CusInput from '../shared/CusInput';
import zxc from 'zxcvbn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GRAY8} from '../../theme/colors';
import {
  getCostumerInfoAction,
  setRegisterSelectedStepAction,
  signUpAction,
} from '../../store/ducks/authDuck';
import RegisterPasswordStrength from './RegisterPasswordStrength';
import Button from '../shared/Button';

const RegisterStep2 = ({lastStep, registerData, isPerson}) => {
  const dispatch = useDispatch();
  const [passwordScore, setPasswordScore] = useState(0);
  const [repeatPasswordSTE, setRepeatPasswordSTE] = useState(true);
  const [passwordSTE, setPasswordSTE] = useState(true);
  const {control, handleSubmit, errors, watch, setValue} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
  });

  const onSubmit = (data) => {
    if (lastStep === 3) {
      // dispatch(
      //   signUpAction({
      //     ...data,
      //     ...registerData,
      //   }),
      // );
    } else {
      dispatch(setRegisterSelectedStepAction(3));
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
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
        <Button
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
