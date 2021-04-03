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
import {RightIcon, Verification} from './components';

const PersonalDataInput: PersonalDataInputFC = ({
  rightIconPressHandler,
  inputPressHandler,
  containerStyle,
  pointerEvents,
  onVerifyPress,
  onChangeText,
  keyboardType,
  errorMessage,
  autoCorrect,
  maxLength,
  rightIcon,
  editable,
  verified,
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
      <RightIcon
        show={!!rightIcon}
        Icon={rightIcon}
        onIconPressHandler={rightIconPressHandler}
      />
      <Verification verified={verified} onVerifyPress={onVerifyPress} />
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
    marginTop: 25,
  },
  inputWrapper: {
    width: '100%',
    position: 'relative',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.blackOp2,
    color: colors.black,
    width: '100%',
    borderStyle: 'solid',
    paddingLeft: 22,
    paddingBottom: 10,
    paddingTop: 22,
  },
  label: {
    fontSize: 12,
    color: colors.blackOp5,
    position: 'absolute',
    paddingHorizontal: 10,
    left: 12,
    top: 0,
    zIndex: 1,
  },
  errorTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 2,
  },
  errorText: {
    color: colors.crimson,
    fontSize: 11,
  },
});
