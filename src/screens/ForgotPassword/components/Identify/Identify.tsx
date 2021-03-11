import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, SendAgain} from 'components';
import {useTranslation} from 'react-i18next';
import {Divider} from 'react-native-elements';

const Identify = () => {
  const {t} = useTranslation();
  return (
    <View>
      <Input
        autoCapitalize="none"
        placeholder="username"
        onBlur={() => {}}
        onChangeText={() => {}}
        value={''}
        keyboardType="number-pad"
        errorMessage={'' && t('authorization.validUsername')}
        label={'user'}
        maxLength={11}
        labelOnBorderToo
      />
      <Divider />
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

      <Button touchableStyle={styles.button} text="continue" />
    </View>
  );
};

export default Identify;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});
