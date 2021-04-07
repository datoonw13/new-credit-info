import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from 'theme';
import useInput from './useInput';
import {InputFC} from './types';

const Input: InputFC = ({onTextChange}) => {
  const {
    firstInput,
    secondInput,
    thirdInput,
    forthInput,
    firstInputRef,
    secondInputRef,
    thirdInputRef,
    forthInputRef,
    onFirstTextChange,
    onSecondInputTextChange,
    onThirdInputTextChange,
    onForthInputTextChange,
    onInputFocus,
  } = useInput({onTextChange});

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={firstInput}
        onChange={onFirstTextChange}
        ref={firstInputRef}
        keyboardType="number-pad"
        // onFocus={onInputFocus}
      />
      <TextInput
        style={styles.input}
        value={secondInput}
        onChange={onSecondInputTextChange}
        ref={secondInputRef}
        keyboardType="number-pad"
        // onFocus={onInputFocus}
      />
      <TextInput
        style={styles.input}
        value={thirdInput}
        onChange={onThirdInputTextChange}
        ref={thirdInputRef}
        keyboardType="number-pad"
        // onFocus={onInputFocus}
      />
      <TextInput
        style={styles.input}
        value={forthInput}
        onChange={onForthInputTextChange}
        ref={forthInputRef}
        keyboardType="number-pad"
        // onFocus={onInputFocus
      />
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
