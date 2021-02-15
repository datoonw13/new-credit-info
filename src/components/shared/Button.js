import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import * as colors from '../../theme/colors';

const Button = ({
  containerStyle,
  touchableStyle,
  textStyle,
  onPress,
  text,
  disabled,
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
    backgroundColor: colors.lightCrimson,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.primaryCrimson,
    fontSize: 16,
    letterSpacing: 1,
    marginTop: 5,
  },
});
