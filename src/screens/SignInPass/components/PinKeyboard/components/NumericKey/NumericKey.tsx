import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import * as colors from 'theme/colors';
import {Text} from 'components';

const NumericKey: NumericKeyFC = ({onPress, pinNumber, first}) => (
  <TouchableOpacity
    style={[styles.pinItem, first && styles.firstPinItem]}
    onPress={() => onPress(pinNumber)}>
    <Text style={styles.pinItemText}>{pinNumber.toString()}</Text>
  </TouchableOpacity>
);

export default NumericKey;

const styles = StyleSheet.create({
  pinItem: {
    width: 93,
    height: 58,
    borderRadius: 14,
    marginLeft: 6,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstPinItem: {
    marginLeft: 0,
  },
  pinItemText: {
    fontSize: 18,
    color: colors.black,
  },
});
