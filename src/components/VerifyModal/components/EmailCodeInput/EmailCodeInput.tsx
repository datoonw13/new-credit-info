import React, {forwardRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from 'theme';
import useInput from './useEmailCodeInput';
import {EmailCodeInputProps} from './types';

const EmailCodeInput = (props: EmailCodeInputProps, ref: any) => {
  console.log(props);
  const {inputConfigList} = useInput(props, ref);

  return (
    <View style={styles.container}>
      {inputConfigList.map(({id, onChange, onFocus, ref: InputRef, value}) => (
        <TextInput
          style={styles.input}
          value={value}
          onChange={onChange}
          ref={InputRef}
          keyboardType="number-pad"
          onFocus={onFocus}
          key={id}
        />
      ))}
    </View>
  );
};

export default forwardRef(EmailCodeInput);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.blackOp3,
    marginHorizontal: 5,
    borderRadius: 13,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 15,
  },
});
