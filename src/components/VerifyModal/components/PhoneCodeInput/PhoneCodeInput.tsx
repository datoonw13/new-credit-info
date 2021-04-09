import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from 'theme';
import useInput from './usePhoneCodeInput';
import {PhoneCodeInputFC} from './types';

const PhoneCodeInput: PhoneCodeInputFC = ({onTextChange}) => {
  const {inputConfigList} = useInput({onTextChange});

  return (
    <View style={styles.container}>
      {inputConfigList.map(({id, onChange, onFocus, ref, value}) => (
        <TextInput
          style={styles.input}
          value={value}
          onChange={onChange}
          ref={ref}
          keyboardType="numeric"
          onFocus={onFocus}
          key={id}
        />
      ))}
    </View>
  );
};

export default PhoneCodeInput;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.blackOp3,
    width: 42,
    height: 52,
    marginHorizontal: 10,
    borderRadius: 13,
    textAlign: 'center',
    fontSize: 25,
  },
});
