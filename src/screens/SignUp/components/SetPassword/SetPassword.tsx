import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import zxc from 'zxcvbn';
import {Controller} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from 'theme/colors';
import {passwordGuidText} from './config';
import {Info} from 'assets/svg';
import {Button, Input, Text} from 'components';
import useSetPassword from './useSetPassword';
import {useTranslation} from 'react-i18next';

const SetPassword: SetPasswordFC = ({lastStep, registerData}) => {
  const {
    setRepeatPasswordVisible,
    repeatPasswordVisible,
    setPasswordVisible,
    setPasswordScore,
    passwordVisible,
    passwordScore,
    handleSubmit,
    onSubmit,
    control,
    errors,
    watch,
  } = useSetPassword({
    registerData,
    lastStep,
  });
  const {t} = useTranslation();
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
                editable={lastStep === 3}
                errorMessage={errors.password?.message}
                onChangeText={(val) => {
                  onChange(val);
                  setPasswordScore(zxc(val).score);
                }}
                rightIcon={
                  <Ionicons
                    name={passwordVisible ? 'eye-off' : 'eye'}
                    color={colors.GRAY8}
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
                secureTextEntry={repeatPasswordVisible}
                rightIconPressHandler={() =>
                  setRepeatPasswordVisible(!repeatPasswordVisible)
                }
                editable={lastStep === 3}
                onChangeText={onChange}
                rightIcon={
                  <Ionicons
                    name={repeatPasswordVisible ? 'eye-off' : 'eye'}
                    color={colors.GRAY8}
                    size={22}
                  />
                }
                errorMessage={errors.repeatPassword?.message}
              />
            )}
            rules={{
              required: {
                value: true,
                message: t('VALID_REPEAT_PASSWORD'),
              },
              validate: (value) => {
                if (value === watch('password')) {
                  return true;
                }

                return t('VALID_REPEAT_PASSWORD');
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

export default SetPassword;

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
    backgroundColor: colors.strangeBlueOp1,
    borderRadius: 18,
    padding: 12,
    marginTop: 5,
    marginBottom: 15,
  },
  infoIconWrapper: {
    width: 32,
    height: 32,
    backgroundColor: colors.blackOp1,
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
