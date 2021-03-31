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
import {PersonalDataInputFC} from './types';
import usePersonalDataInput from './usePersonalDataInput';

const PersonalDataInput: PersonalDataInputFC = ({
  rightIconPressHandler,
  inputPressHandler,
  containerStyle,
  pointerEvents,
  onChangeText,
  keyboardType,
  errorMessage,
  autoCorrect,
  maxLength,
  rightIcon,
  editable,
  onBlur,
  style,
  label,
  value,
}) => {
  const {inputBorderColor, height} = usePersonalDataInput({errorMessage});
  const {t} = useTranslation();

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={inputPressHandler}
      disabled={!inputPressHandler}>
      {rightIcon && (
        <TouchableOpacity
          style={styles.rightIcon}
          onPress={rightIconPressHandler}>
          {rightIcon}
        </TouchableOpacity>
      )}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>{t(label)}</Text>
        <TextInput
          style={[styles.input, {borderColor: inputBorderColor}, style]}
          placeholderTextColor={colors.blackOp3}
          pointerEvents={pointerEvents}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCorrect={autoCorrect}
          autoCapitalize="none"
          maxLength={maxLength}
          editable={editable}
          onBlur={onBlur}
          value={value}
        />
        <Animated.View style={[styles.errorTextWrapper, {height}]}>
          <Text style={styles.errorText} children={errorMessage} />
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export default PersonalDataInput;

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
    position: 'relative',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.blackOp5,
    color: colors.black,
    width: '100%',
    height: 67,
    borderStyle: 'solid',
    padding: 22,
  },
  label: {
    fontSize: 12,
    color: colors.blackOp5,
    position: 'absolute',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    left: 12,
    top: 0,
    zIndex: 1,
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
  errorTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
    paddingTop: 2,
  },
  errorText: {
    color: colors.crimson,
  },
});
