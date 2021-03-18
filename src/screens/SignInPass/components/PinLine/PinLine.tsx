import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as colors from 'theme/colors';
import {PinLineFC} from './types';

const PinLine: PinLineFC = ({fillNumber, style}) => {
  const pinList = Array.from(Array(4).keys());
  return (
    <View style={[styles.pinContent, style]}>
      {pinList.map((item) => (
        <View
          style={[
            styles.pinItem,
            !item && styles.noMarginLeft,
            fillNumber > item && styles.filled,
          ]}
          key={item}
        />
      ))}
    </View>
  );
};

export default PinLine;

const styles = StyleSheet.create({
  pinContent: {
    flexDirection: 'row',
  },
  pinItem: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.blackOp1,
  },
  noMarginLeft: {
    marginLeft: 0,
  },
  filled: {
    backgroundColor: colors.blackOp7,
    borderColor: colors.blackOp7,
  },
});
