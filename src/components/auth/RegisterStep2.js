import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import AuthSubmitButton from './AuthSubmitButton';
import {Divider} from 'react-native-elements';
import {translate} from '../../services/localizeService';
import {useDispatch} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import i18n from 'i18n-js';
import {
  getCostumerInfoAction,
  setRegisterLastStepAction,
  setRegisterSelectedStepAction,
  signUpAction,
} from '../../store/ducks/authDuck';
import Input from '../shared/Input';
import Button from '../shared/Button';

const RegisterStep2 = ({lastStep, registerData, isPerson}) => {
  const dispatch = useDispatch();
  const {control, handleSubmit, errors, watch, setValue} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      userName: !registerData.userName ? '' : registerData.userName,
      repeatUserName: !registerData.userName ? '' : registerData.userName,
      firstName: !registerData.firstName ? '' : registerData.firstName,
      lastName: !registerData.lastName ? '' : registerData.lastName,
    },
  });

  useEffect(() => {
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
      dispatch(setRegisterLastStepAction(3));
      dispatch(setRegisterSelectedStepAction(3));
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
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Controller
            name="userName"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                label={isPerson ? 'PERSONAL_NUMBER' : 'IDENTIFICATION_CODE'}
                editable={lastStep === 2}
                keyboardType="number-pad"
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={isPerson ? 11 : 9}
                errorMessage={
                  errors.userName &&
                  translate(
                    isPerson
                      ? 'VALID_PERSONAL_NUMBER'
                      : 'VALID_IDENTIFICATION_CODE',
                  )
                }
                labelOnBorderToo
              />
            )}
            rules={{
              required: true,
              minLength: isPerson ? 11 : 9,
              pattern: /^\d*$/,
            }}
          />
          <Divider />
          <Controller
            name="repeatUserName"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                label={
                  isPerson
                    ? 'REPEAT_PERSONAL_NUMBER'
                    : 'REPEAT_IDENTIFICATION_CODE'
                }
                editable={lastStep === 2}
                keyboardType="number-pad"
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={isPerson ? 11 : 9}
                errorMessage={
                  errors.repeatUserName &&
                  translate(
                    isPerson
                      ? 'VALID_REPEAT_PERSONAL_NUMBER'
                      : 'VALID_REPEAT_IDENTIFICATION_CODE',
                  )
                }
              />
            )}
            rules={{
              required: true,
              validate: (value) => value === watch('userName'),
            }}
          />
          <Divider />
          <Controller
            name="firstName"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                label={'FIRST_NAME'}
                editable={lastStep === 2}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                value={value}
                maxLength={35}
                errorMessage={errors.firstName && translate('VALID_FIRST_NAME')}
              />
            )}
            rules={{
              required: true,
              pattern: i18n.locale === 'ka' ? /^[ა-ჰ]*$/ : /^[A-Za-z]*$/,
            }}
          />
          <Divider />
          {isPerson ? (
            <Controller
              name="lastName"
              control={control}
              render={({onChange, onBlur, value}) => (
                <Input
                  label={'LAST_NAME'}
                  editable={lastStep === 2}
                  onChangeText={(val) => onChange(val)}
                  onBlur={onBlur}
                  value={value}
                  maxLength={35}
                  errorMessage={errors.lastName && translate('VALID_LAST_NAME')}
                />
              )}
              rules={{
                required: true,
                pattern: i18n.locale === 'ka' ? /^[ა-ჰ]*$/ : /^[A-Za-z]*$/,
              }}
            />
          ) : null}
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
  scrollViewContainer: {
    paddingTop: 10,
  },
});

export default RegisterStep2;
