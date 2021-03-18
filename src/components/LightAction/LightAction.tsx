import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from 'components/Text';
import {colors} from 'theme';
import {LightActionFC} from './types';

const LightAction: LightActionFC = ({
  text,
  onPress,
  style,
  textStyle,
  color = colors.blue,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={[styles.text, textStyle, {color}]} children={text} />
    </TouchableOpacity>
  );
};

export default LightAction;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 12,
  },
});
