import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from 'theme';

const FingerPrintKey: FingerPrintKeyFC = ({onPress}) => (
  <TouchableOpacity
    style={[styles.pinItem, styles.firstPinItem]}
    onPress={() => onPress(10)}>
    <MaterialIcons name="fingerprint" color={colors.GRAY1} size={30} />
  </TouchableOpacity>
);

export default FingerPrintKey;

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
