import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BLUE, GRAY2} from 'theme/colors';
import {Divider} from 'react-native-elements';
import {translate} from 'services/localizeService';
import {useDispatch} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import {checkOTPAction, sendOTPAction} from 'store/ducks/authDuck';
import {Button, Input} from 'components';

const RegisterStep6 = ({registerData, lastStep}) => {
  const dispatch = useDispatch();
  const {control, handleSubmit, errors} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      phone: registerData.phone ? registerData.phone : '',
      code: '',
    },
  });

  const onSubmit = (data) => {
    if (registerData.phone) {
      dispatch(checkOTPAction(data.code));
    } else {
      dispatch(sendOTPAction(data.phone));
    }
  };

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

export default RegisterStep6;

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
