import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Animated,
  View,
  Text,
} from 'react-native';
import * as colors from 'theme/colors';
import {InputFC} from './types';
import useInput from './useInput';

const Input: InputFC = ({
  labelOnBorderToo = false,
  rightIconPressHandler,
  notRequired = false,
  inputPressHandler,
  secureTextEntry,
  autoCapitalize,
  pointerEvents,
  onChangeText,
  keyboardType,
  errorMessage,
  reverseError,
  autoCorrect,
  maxLength,
  rightIcon,
  leftIcon,
  editable,
  onBlur,
  label,
  value,
}) => {
  const {inputBorderColor, height} = useInput({errorMessage});
  const {t} = useTranslation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={inputPressHandler}
      disabled={!inputPressHandler}>
      {labelOnBorderToo && (
        <Text style={styles.label}>{label && t(label)}</Text>
      )}
      {notRequired && (
        <Text style={styles.notRequired}>{t('notRequired')}</Text>
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
          style={[
            styles.input,
            leftIcon && styles.paddingLeft,
            {borderColor: inputBorderColor},
          ]}
          placeholderTextColor={colors.blackOp3}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          placeholder={label && t(label)}
          pointerEvents={pointerEvents}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCorrect={autoCorrect}
          maxLength={maxLength}
          editable={editable}
          onBlur={onBlur}
          value={value}
        />
        <Animated.View
          style={[
            styles.errorTextWrapper,
            reverseError && styles.reverseError,
            {height},
          ]}>
          <Text style={styles.errorText} children={errorMessage} />
        </Animated.View>
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
    borderColor: colors.blackOp5,
    color: colors.black,
    width: '100%',
    height: 67,
    borderStyle: 'solid',
    borderRadius: 20,
    padding: 22,
  },
  label: {
    fontSize: 12,
    color: colors.blackOp5,
    position: 'absolute',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    left: '10%',
    top: -8,
    zIndex: 1,
  },
  notRequired: {
    fontSize: 12,
    color: colors.blackOp5,
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
    backgroundColor: colors.blackOp1,
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
    borderRightColor: colors.blackOp3,
    height: 20,
  },
  paddingLeft: {
    paddingLeft: 22 + 78,
  },
  errorTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
    paddingTop: 2,
  },
  reverseError: {
    position: 'absolute',
    right: 0,
    bottom: 7,
  },
  errorText: {
    color: colors.crimson,
  },
});
