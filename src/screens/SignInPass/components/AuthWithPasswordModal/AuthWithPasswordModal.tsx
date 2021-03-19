import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {LightAction, Input, Button} from 'components';
import {dummyUser, useFormConfig} from './config';
import {useForm, Controller} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Account from '../Account';
import useAuthWithPasswordModal from './useAuthWithPasswordModal';
import {colors} from 'theme';

const AuthWithPasswordModal: AuthWithPasswordModalFC = ({
  onBackdropPress,
  visible,
}) => {
  const {onPasswordEyePress, passwordVisible, t} = useAuthWithPasswordModal();
  const {control, errors} = useForm(useFormConfig);

  const EyeIcon = (
    <Ionicons
      name={passwordVisible ? 'eye-off' : 'eye'}
      color={colors.blackOp05}
      size={22}
    />
  );

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onBackdropPress}
      animationIn="fadeInDownBig"
      style={styles.container}>
      <View style={styles.accountWrapper}>
        <Account image={dummyUser.image} user={dummyUser.name} />
        <Controller
          name="password"
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              onBlur={onBlur}
              value={value}
              maxLength={35}
              label={'password'}
              secureTextEntry={passwordVisible}
              rightIconPressHandler={onPasswordEyePress}
              onChangeText={onChange}
              errorMessage={errors.password && t('authorization.validPassword')}
              rightIcon={EyeIcon}
              containerStyle={styles.passwordInput}
              labelOnBorderToo
            />
          )}
          rules={{
            required: true,
          }}
        />
        <LightAction
          text="signInPass.forgotPassword"
          style={styles.forgotPassword}
        />
        <Button text="auth" touchableStyle={styles.authButton} />
      </View>
    </Modal>
  );
};

export default AuthWithPasswordModal;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  accountWrapper: {
    width: '100%',
    backgroundColor: colors.white,
    paddingTop: 15,
    borderRadius: 10,
    position: 'relative',
    paddingBottom: 20,
  },
  passwordInput: {
    marginTop: 50,
    width: '90%',
    marginLeft: '5%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: 25,
    marginTop: 10,
  },
  authButton: {
    width: '90%',
    marginLeft: '5%',
    position: 'absolute',
    bottom: -100,
    backgroundColor: colors.white,
    borderRadius: 12,
  },
});
