import React, {forwardRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from 'theme';
import useInput from './usePhoneCodeInput';
import {PhoneCodeInputProps} from './types';

const PhoneCodeInput = (props: PhoneCodeInputProps, ref: any) => {
  const {inputConfigList} = useInput(props, ref);

  return (
    <View style={styles.container}>
      {inputConfigList.map(({id, onChange, onFocus, ref: inputRef, value}) => (
        <TextInput
          style={styles.input}
          value={value}
          onChange={onChange}
          ref={inputRef}
          keyboardType="numeric"
          onFocus={onFocus}
          key={id}
        />
      ))}
    </View>
  );
};

export default forwardRef(PhoneCodeInput);

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
