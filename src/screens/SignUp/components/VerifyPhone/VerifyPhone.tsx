import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BLUE, GRAY2} from 'theme/colors';
import {Divider} from 'react-native-elements';
import {translate} from 'services/localizeService';
import {Controller} from 'react-hook-form';
import {Button, Input} from 'components';
import useVerifyPhone from './useVerifyPhone';

const VerifyPhone: VerifyPhoneFC = ({registerData}) => {
  const {onSubmit, handleSubmit, errors, control} = useVerifyPhone({
    registerData,
  });
  return (
    <>
      <Controller
        name="phone"
        control={control}
        render={({onChange, onBlur, value}) => (
          <Input
            label={'PHONE'}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            maxLength={9}
            errorMessage={errors.phone && translate('VALID_PHONE')}
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
      {registerData.phone ? (
        <View style={styles.receivedCodeContainer}>
          <Controller
            name="code"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                maxLength={6}
                keyboardType="number-pad"
                errorMessage={errors.code && translate('VALID_OTP')}
                label={'OTP'}
              />
            )}
            rules={{
              required: true,
              minLength: 6,
              pattern: /^\d*$/,
            }}
          />
        </View>
      ) : null}
      <Divider />
      <Button text={'CONTINUE'} onPress={handleSubmit(onSubmit)} />
    </>
  );
};

export default VerifyPhone;

const styles = StyleSheet.create({
  prefixContainer: {
    borderRightWidth: 1,
    borderColor: GRAY2,
    paddingRight: 18,
  },
  prefix: {
    color: BLUE,
    height: 20,
  },
  receivedCodeContainer: {
    marginTop: 20,
  },
});
