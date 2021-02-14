import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import {translate} from '../../services/localizeService';
import {useDispatch} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GRAY8} from '../../theme/colors';
import {
  setRegisterSelectedStepAction,
  signUpAction,
} from '../../store/ducks/authDuck';
import Button from '../shared/Button';
import Input from '../shared/Input';
import Text from '../shared/Text';
import {Info} from '../../assets/svg';
import * as colors from '../../theme/colors';

const RegisterStep3 = ({lastStep, registerData}) => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(true);
  const {control, handleSubmit, errors, watch} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
  });

  const onSubmit = (data) => {
    console.log({...data, ...registerData});
    if (lastStep === 3) {
      dispatch(
        signUpAction({
          ...data,
          ...registerData,
        }),
      );
    } else {
      dispatch(setRegisterSelectedStepAction(4));
    }
  };
  console.log(errors);

  const passwordGuidText = {
    bold: 'ძლიერი პაროლი უნდა იყოს რთულად გამოსაცნობი.',
    norm:
      'გამოიყენეთ ძნელად მისახვედრი და გამოსაცნობი სიტყვები, ფრაზები, სიმბოლოები და რიცხვები, არასტანდართული uPPercasing-ი.',
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
              <Text
                children={passwordGuidText.bold}
                style={styles.guideTextBold}
                dontTranslate
              />
              <Text
                children={passwordGuidText.norm}
                style={styles.guideTextNorm}
                dontTranslate
              />
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
                secureTextEntry={passwordVisible}
                rightIconPressHandler={() => {
                  setPasswordVisible(!passwordVisible);
                }}
                errorStyle={styles.passwordError}
                editable={lastStep === 3}
                errorMessage={errors.password?.message}
                onChangeText={onChange}
                rightIcon={
                  <Ionicons
                    name={passwordVisible ? 'eye-off' : 'eye'}
                    color={GRAY8}
                    size={22}
                  />
                }
              />
            )}
            rules={{
              required: true,
              minLength: {
                value: 8,
                message: 'საჭიროა მინიმუმ 8 სიმბოლო!',
              },
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
                secureTextEntry={repeatPasswordVisible}
                rightIconPressHandler={() =>
                  setRepeatPasswordVisible(!repeatPasswordVisible)
                }
                errorStyle={styles.passwordError}
                editable={lastStep === 3}
                onChangeText={onChange}
                rightIcon={
                  <Ionicons
                    name={repeatPasswordVisible ? 'eye-off' : 'eye'}
                    color={GRAY8}
                    size={22}
                  />
                }
                errorMessage={errors.repeatPassword?.message}
              />
            )}
            rules={{
              required: {
                value: true,
                message: translate('VALID_REPEAT_PASSWORD'),
              },
              validate: (value) => {
                if (value === watch('password')) {
                  return true;
                }

                return translate('VALID_REPEAT_PASSWORD');
              },
            }}
          />
        </ScrollView>
        <Divider />
        <Button
          text={'CONTINUE'}
          onPress={() =>
            lastStep === 3 ? handleSubmit(onSubmit)() : onSubmit()
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

export default RegisterStep3;
