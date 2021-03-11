import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, SendAgain} from 'components';
import {useTranslation} from 'react-i18next';
import {Divider} from 'react-native-elements';
import useIdentity from './useIdentity';
import {useForm, Controller} from 'react-hook-form';
import {rules} from 'utils/form';

const Identify = () => {
  const {t} = useTranslation();
  const {usernameEntered, onPress} = useIdentity();
  const {control, errors, handleSubmit} = useForm({
    defaultValues: {
      username: '',
    },
  });

  return (
    <View>
      <Controller
        name="username"
        render={({onBlur, onChange, value}) => (
          <Input
            autoCapitalize="none"
            placeholder="username"
            onBlur={onBlur}
            onChangeText={onChange}
            editable={!usernameEntered}
            value={value}
            keyboardType="number-pad"
            errorMessage={errors.username && t('authorization.validUsername')}
            label={'user'}
            maxLength={11}
            labelOnBorderToo
          />
        )}
        control={control}
        rules={rules.userName(true)}
      />
      <Divider />
      {usernameEntered && (
        <>
          <Input
            onBlur={() => {}}
            onChangeText={() => {}}
            value={''}
            maxLength={6}
            keyboardType="number-pad"
            label={'registration.OTP'}
            errorMessage={'' && t('registration.validOTP')}
          />
          <SendAgain phoneNumber={''} />
        </>
      )}
      <Button
        touchableStyle={styles.button}
        text="continue"
        onPress={handleSubmit(onPress)}
      />
    </View>
  );
};

export default Identify;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});
