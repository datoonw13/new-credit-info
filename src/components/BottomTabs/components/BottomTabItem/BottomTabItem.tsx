import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from 'theme';
import {BottomTabItemFC} from './types';
import {isActiveTab} from './helper';

const BottomTabItem: BottomTabItemFC = ({
  BottomTabActiveIcon,
  BottomTabInactiveIcon,
  navigate,
  screen,
}) => {
  const activeTab = isActiveTab(screen);

  const BottomTabIcon = activeTab ? BottomTabActiveIcon : BottomTabInactiveIcon;

  return (
    <TouchableOpacity
      style={[styles.container, activeTab && styles.active]}
      onPress={navigate}>
      <BottomTabIcon />
    </TouchableOpacity>
  );
};

export default BottomTabItem;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    borderWidth: 1,
    borderRadius: 16,
    marginHorizontal: 11,
    borderColor: colors.blackOp2,
  },
  active: {
    borderColor: colors.crimson,
    backgroundColor: colors.crimsonOp1,
  },
});
