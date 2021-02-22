import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from 'components/Text';
import {colors} from 'theme';
import {FIRAGO_REGULAR} from 'theme/fonts';
import {BlueActionFC} from './types';

const BlueAction: BlueActionFC = ({text, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]} children={text} />
    </TouchableOpacity>
  );
};

export default BlueAction;

const styles = StyleSheet.create({
  container: {},
  text: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: FIRAGO_REGULAR,
  },
});
