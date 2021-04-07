import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from 'theme';
import useInput from './useInput';
import {InputFC} from './types';

const Input: InputFC = ({onTextChange}) => {
  const {inputConfigList} = useInput({onTextChange});

  return (
    <View style={styles.container}>
      {inputConfigList.map(({id, onChange, onFocus, ref, value}) => (
        <TextInput
          style={styles.input}
          value={value}
          onChange={onChange}
          ref={ref}
          keyboardType="number-pad"
          onFocus={onFocus}
          key={id}
        />
      ))}
    </View>
  );
};

export default Input;

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
