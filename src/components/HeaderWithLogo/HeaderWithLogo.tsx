import React from 'react';
import {StyleSheet, View, SafeAreaView, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Logo} from 'assets/svg';
import {HeaderWithLogoFC} from './types';
import {openDrawer} from 'utils/navigation';
import {colors} from 'theme';

const HeaderWithLogo: HeaderWithLogoFC = ({mode = 'Middle', style}) => {
  return (
    <>
      <SafeAreaView />
      <View
        style={[
          styles.container,
          mode === 'Left' ? styles.left : {},
          mode === 'Middle' ? styles.middle : {},
          mode === 'Right' ? styles.right : {},
          mode === 'WithMenu' ? styles.withMenu : {},
          style,
        ]}>
        <Logo />
        {mode === 'WithMenu' && (
          <TouchableOpacity onPress={openDrawer}>
            <MaterialCommunityIcons size={28} name="menu" />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default HeaderWithLogo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    zIndex: 1,
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  middle: {
    justifyContent: 'center',
  },
  withMenu: {
    justifyContent: 'space-between',
  },
});
