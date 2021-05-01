import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'theme';
import {FancyIconFC} from './types';

const FancyIcon: FancyIconFC = ({
  bg = colors.crimsonOp1,
  dimensions = 32,
  roundness = 16,
  visible = true,
  style,
  Icon,
}) => {
  if (!visible) {
    return null;
  }
  return (
    <View
      style={[
        styles.container,
        {
          width: dimensions,
          height: dimensions,
          borderRadius: roundness,
          backgroundColor: bg,
        },
        style,
      ]}>
      <Icon />
    </View>
  );
};

export default FancyIcon;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
