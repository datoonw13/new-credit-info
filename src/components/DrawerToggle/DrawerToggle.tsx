import React from 'react';
import {TouchableOpacity} from 'react-native';
import {toggleDrawer} from 'utils/navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerToggle: DrawerToggleFC = ({visible = false}) => {
  if (visible === false) {
    return null;
  }

  return (
    <TouchableOpacity onPress={toggleDrawer}>
      <MaterialCommunityIcons size={28} name="menu" />
    </TouchableOpacity>
  );
};

export default DrawerToggle;
