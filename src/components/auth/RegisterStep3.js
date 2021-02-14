import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import {translate} from '../../services/localizeService';
import {useDispatch} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import zxc from 'zxcvbn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GRAY8} from '../../theme/colors';
import {
  getCostumerInfoAction,
  setRegisterSelectedStepAction,
  signUpAction,
} from '../../store/ducks/authDuck';
import Button from '../shared/Button';
import Input from '../shared/Input';
import Text from '../shared/Text';
import {Info} from '../../assets/svg';
import * as colors from '../../theme/colors';

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
          <View style={styles.setPasswordGuide}>
            <View style={styles.infoIconWrapper}>
              <Info />
            </View>
            <View>
              <Text style={styles.guideTextBold} dontTranslate>
                ძლიერი პაროლი უნდა იყოს რთულად გამოსაცნობი.
              </Text>
              <Text style={styles.guideTextNorm} dontTranslate>
                გამოიყენეთ ძნელად მისახვედრი და გამოსაცნობი სიტყვები, ფრაზები,
                სიმბოლოები და რიცხვები, არასტანდართული uPPercasing-ი.
              </Text>
            </View>
          </View>
          <Controller
            name="password"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                onBlur={onBlur}
                value={value}
                maxLength={35}
                label={'PASSWORD'}
                secureTextEntry={passwordSTE}
                rightIconPressHandler={() => {
                  console.log('მეკლიკებააა!');
                  setPasswordSTE(!passwordSTE);
                }}
                errorStyle={styles.passwordError}
                editable={lastStep === 3}
                onChangeText={(val) => {
                  onChange(val);
                  setPasswordScore(zxc(val).score);
                }}
                rightIcon={
                  <Ionicons
                    name={passwordSTE ? 'eye-off' : 'eye'}
                    color={GRAY8}
                    size={22}
                  />
                }
              />
            )}
            rules={{
              required: true,
              validate: () => passwordScore >= 3,
            }}
          />
          <Divider />
          <Controller
            name="repeatPassword"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                onBlur={onBlur}
                value={value}
                maxLength={35}
                label={'REPEAT_PASSWORD'}
                secureTextEntry={repeatPasswordSTE}
                rightIconPressHandler={() => {
                  setRepeatPasswordSTE(!repeatPasswordSTE);
                }}
                errorStyle={styles.passwordError}
                editable={lastStep === 3}
                onChangeText={onChange}
                rightIcon={
                  <Ionicons
                    name={passwordSTE ? 'eye-off' : 'eye'}
                    color={GRAY8}
                    size={22}
                  />
                }
                errorMessage={
                  errors.repeatPassword && translate('VALID_REPEAT_PASSWORD')
                }
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
  passwordError: {
    height: 0,
  },
  setPasswordGuide: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.lightestStrangeBlue,
    borderRadius: 18,
    padding: 12,
    marginTop: 5,
    marginBottom: 15,
  },
  infoIconWrapper: {
    width: 32,
    height: 32,
    backgroundColor: colors.lightestGrey,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
  },
  guideTextBold: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  guideTextNorm: {
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
    marginRight: 30,
  },
});

export default RegisterStep2;
