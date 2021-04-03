import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const RightIcon: RightIconFC = ({Icon, onIconPressHandler, show}) => {
  return show === true ? (
    <TouchableOpacity style={styles.rightIcon} onPress={onIconPressHandler}>
      {Icon}
    </TouchableOpacity>
  ) : null;
};

export default RightIcon;

const styles = StyleSheet.create({
  rightIcon: {
    position: 'absolute',
    right: 10,
    top: 0,
    width: 32,
    height: 67,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
