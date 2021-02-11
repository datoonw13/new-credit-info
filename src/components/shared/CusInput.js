import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {BLACK, GRAY3, RED1} from '../../theme/colors';
import {FIRAGO_SEMIBOLD, POPPINS_REGULAR} from '../../theme/fonts';

const CusInput = ({
  style,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  leftIcon,
  rightIcon,
  errorMessage,
  label,
  rightIconPressHandler,
  inputPressHandler,
  ...otherProps
}) => {
  return (
    <View style={{...style}}>
      <Text style={{...styles.label, ...labelStyle}}>{label}</Text>
      <TouchableOpacity
        disabled={!inputPressHandler}
        onPress={inputPressHandler}>
        <View style={{...styles.containter, ...containerStyle}}>
          {leftIcon}
          <TextInput
            style={{
              ...styles.input,
              paddingLeft: leftIcon ? 12 : 0,
              ...inputStyle,
            }}
            {...otherProps}
          />
          {rightIcon ? (
            <TouchableOpacity onPress={rightIconPressHandler}>
              {rightIcon}
            </TouchableOpacity>
          ) : null}
        </View>
      </TouchableOpacity>
      <Text style={{...styles.error, ...errorStyle}}>{errorMessage}</Text>
    </View>
  );
};

export default CusInput;

const styles = StyleSheet.create({
  containter: {
    borderColor: GRAY3,
    borderWidth: 1,
    borderRadius: 18,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 22,
    paddingRight: 22,
  },
  input: {
    height: 61,
    paddingLeft: 12,
    color: BLACK,
    fontFamily: POPPINS_REGULAR,
    fontSize: 12,
    flex: 1,
  },
  error: {
    marginTop: 5,
    fontFamily: POPPINS_REGULAR,
    color: RED1,
    fontSize: 12,
    marginBottom: 5,
  },
  label: {
    paddingLeft: 9,
    marginBottom: 8,
    fontFamily: FIRAGO_SEMIBOLD,
    color: BLACK,
    fontSize: 12,
  },
});

CusInput.propTypes = {
  style: PropTypes.object,
};
