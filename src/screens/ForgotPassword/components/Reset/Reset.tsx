import React from 'react';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'theme';
import {Input, Button} from 'components';
import {Divider} from 'react-native-elements';

const Reset = () => {
  return (
    <View>
      <Input
        onBlur={() => {}}
        value={''}
        maxLength={35}
        label="registration.password"
        secureTextEntry={true}
        // rightIconPressHandler={() => {
        //   setPasswordVisible(!passwordVisible);
        // }}
        errorMessage={''}
        onChangeText={(val) => {}}
        rightIcon={
          <Ionicons
            name={true ? 'eye-off' : 'eye'}
            color={colors.GRAY8}
            size={22}
          />
        }
      />

      <Divider />

      <Input
        onBlur={() => {}}
        value={''}
        maxLength={35}
        label="registration.repeatPassword"
        secureTextEntry={true}
        // rightIconPressHandler={() =>
        //   setRepeatPasswordVisible(!repeatPasswordVisible)
        // }
        onChangeText={() => {}}
        rightIcon={
          <Ionicons
            name={true ? 'eye-off' : 'eye'}
            color={colors.GRAY8}
            size={22}
          />
        }
        // errorMessage={errors.repeatPassword?.message}
      />
      <Button touchableStyle={styles.button} text="continue" />
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});
