import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from 'theme';

const FingerPrintKey: DeleteKeyFC = ({onPress}) => (
  <TouchableOpacity style={styles.pinItem} onPress={() => onPress(11)}>
    <Feather name="delete" color={colors.GRAY1} size={24} />
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
});
