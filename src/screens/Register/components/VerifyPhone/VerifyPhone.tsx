import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as colors from 'theme/colors';
import {Divider} from 'react-native-elements';
import {Controller} from 'react-hook-form';
import {Button, Input, SendAgain} from 'components';
import useVerifyPhone from './useVerifyPhone';
import {useTranslation} from 'react-i18next';

const VerifyPhone: VerifyPhoneFC = ({registerData}) => {
  const {onSubmit, handleSubmit, errors, control} = useVerifyPhone({
    registerData,
  });

  const {t} = useTranslation();

  return (
    <>
      <Controller
        name="phone"
        control={control}
        render={({onChange, onBlur, value}) => (
          <Input
            label={'registration.phone'}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            maxLength={9}
            errorMessage={errors.phone && t('registration.validPhone')}
            editable={!registerData.phone}
            keyboardType="number-pad"
            leftIcon={
              <View style={styles.prefixContainer}>
                <Text style={styles.prefix}>GE +995</Text>
              </View>
            }
          />
        )}
        rules={{
          required: true,
          minLength: 9,
          pattern: /^5[0-9]{8}$/,
        }}
      />
      {registerData.phone && (
        <View style={styles.receivedCodeContainer}>
          <Controller
            name="code"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={6}
                keyboardType="number-pad"
                label={'registration.OTP'}
                errorMessage={errors.code && t('registration.validOTP')}
              />
            )}
            rules={{
              required: true,
              minLength: 6,
              pattern: /^\d*$/,
            }}
          />
          <SendAgain phoneNumber={registerData.phone} />
        </View>
      )}
      <Divider />
      <Button text="continue" onPress={handleSubmit(onSubmit)} />
    </>
  );
};

export default VerifyPhone;

const styles = StyleSheet.create({
  prefixContainer: {
    borderRightWidth: 1,
    borderColor: colors.GRAY2,
    paddingRight: 18,
  },
  prefix: {
    color: colors.blue,
    height: 20,
  },
  receivedCodeContainer: {
    marginTop: 20,
  },
});
