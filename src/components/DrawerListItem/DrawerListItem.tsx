import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from 'components/Text';
import {DrawerListItemFC} from './types';

const DrawerListItem: DrawerListItemFC = ({title, Icon, color, navigate}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate && navigate()}>
      <View style={[styles.iconWrapper, {backgroundColor: color}]}>
        <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DrawerListItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    height: 38,
    width: 38,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    marginRight: 15,
  },
  text: {
    letterSpacing: 0.2,
  },
});
