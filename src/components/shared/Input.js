import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import * as colors from '../../theme/colors';
import {translate} from '../../services/localizeService';

const Input = ({
  labelOnBorderToo = false,
  keyboardType,
  onChangeText,
  maxLength,
  onBlur,
  label,
  value,
}) => {
  return (
    <View style={styles.container}>
      {labelOnBorderToo && (
        <Text style={styles.label}>{label && translate(label)}</Text>
      )}
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={label && translate(label)}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          maxLength={maxLength}
          style={styles.input}
          onBlur={onBlur}
          value={value}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  inputWrapper: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    width: '100%',
    height: 67,
    borderStyle: 'solid',
    borderRadius: 20,
    padding: 22,
  },
  label: {
    fontSize: 12,
    color: colors.lightGrey,
    position: 'absolute',
    backgroundColor: colors.pureWhite,
    paddingHorizontal: 10,
    left: '10%',
    top: -8,
    zIndex: 1,
  },
  iconWrapper: {
    position: 'absolute',
    right: 20,
    top: 13,
    zIndex: 1,
    backgroundColor: colors.lightestGrey,
    padding: 10,
    borderRadius: 10,
  },
});
