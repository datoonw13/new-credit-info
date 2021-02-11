import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BLUE, GRAY2} from '../../theme/colors';
import AuthSubmitButton from './AuthSubmitButton';
import {Divider} from 'react-native-elements';
import {translate} from '../../services/localizeService';
import {useDispatch} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import CusInput from '../shared/CusInput';
import {checkOTPAction, sendOTPAction} from '../../store/ducks/authDuck';
import {notifyAction} from '../../store/ducks/mainDuck';

const RegisterStep5 = ({registerData, lastStep}) => {
  const dispatch = useDispatch();
  const {control, handleSubmit, errors} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      phone: registerData.phone ? registerData.phone : '',
      code: '',
    },
  });

  // React.useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch, registerData]);

  const onSubmit = (data) => {
    console.log(data);
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
          <CusInput
            placeholder={translate('PHONE')}
            onBlur={onBlur}
            onChangeText={(val) => onChange(val)}
            value={value}
            maxLength={9}
            keyboardType="number-pad"
            errorMessage={errors.phone && translate('VALID_PHONE')}
            label={translate('PHONE')}
            editable={!registerData.phone}
            inputStyle={{marginLeft: 10}}
            leftIcon={
              <View style={styles.prefixContainer}>
                <Text style={styles.prefix}>+995</Text>
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
        <Controller
          name="code"
          control={control}
          render={({onChange, onBlur, value}) => (
            <CusInput
              placeholder={translate('OTP')}
              onBlur={onBlur}
              onChangeText={(val) => onChange(val)}
              value={value}
              maxLength={6}
              keyboardType="number-pad"
              errorMessage={errors.code && translate('VALID_OTP')}
              label={translate('OTP')}
            />
          )}
          rules={{
            required: true,
            minLength: 6,
            pattern: /^\d*$/,
          }}
        />
      ) : null}
      <Divider />
      <AuthSubmitButton text={'CONTINUE'} onPress={handleSubmit(onSubmit)} />
    </>
  );
};

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
});

export default RegisterStep5;
