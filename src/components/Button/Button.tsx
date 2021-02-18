import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from 'components/Text';
import * as colors from 'theme/colors';
import {ButtonFC} from './types';

const Button: ButtonFC = ({
  disabled = false,
  containerStyle,
  touchableStyle,
  textStyle,
  onPress,
  text,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.touchableView, touchableStyle]}>
      <View style={[styles.buttonView, containerStyle]}>
        <Text style={[styles.buttonText, textStyle]} caps>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  touchableView: {
    width: '100%',
  },
  buttonView: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.crimsonOp2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.crimson,
    fontSize: 16,
    letterSpacing: 1,
    marginTop: 5,
  },
});
