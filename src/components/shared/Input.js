import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import * as colors from '../../theme/colors';
import {translate} from '../../services/localizeService';

const Input = ({
  labelOnBorderToo = false,
  rightIconPressHandler,
  notRequired = false,
  inputPressHandler,
  secureTextEntry,
  autoCapitalize,
  pointerEvents,
  onChangeText,
  keyboardType,
  maxLength,
  rightIcon,
  leftIcon,
  editable,
  onBlur,
  label,
  value,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={inputPressHandler}
      disabled={!inputPressHandler}>
      {labelOnBorderToo && (
        <Text style={styles.label}>{label && translate(label)}</Text>
      )}
      {notRequired && (
        <Text style={styles.notRequired}>{translate('NOT_REQUIRED')}</Text>
      )}
      {rightIcon && (
        <TouchableOpacity
          style={styles.rightIcon}
          onPress={rightIconPressHandler}>
          {rightIcon}
        </TouchableOpacity>
      )}
      {leftIcon && (
        <TouchableOpacity style={styles.leftIcon}>{leftIcon}</TouchableOpacity>
      )}
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, leftIcon && styles.paddingLeft]}
          placeholder={label && translate(label)}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          pointerEvents={pointerEvents}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          maxLength={maxLength}
          editable={editable}
          onBlur={onBlur}
          value={value}
        />
      </View>
    </TouchableOpacity>
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
  notRequired: {
    fontSize: 12,
    color: colors.lightGrey,
    position: 'absolute',
    right: '5%',
    bottom: 10,
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
  rightIcon: {
    position: 'absolute',
    right: 10,
    top: 0,
    width: 32,
    height: 67,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  leftIcon: {
    position: 'absolute',
    left: 10,
    top: 24,
    width: 78,
    borderRightWidth: 2,
    borderRightColor: colors.lighterGrey,
    height: 20,
  },
  paddingLeft: {
    paddingLeft: 22 + 78,
  },
});
