import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Logo} from 'assets/svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HeaderWithLogoFC} from './types';

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
          <MaterialCommunityIcons size={28} name="menu" />
        )}
      </View>
    </>
  );
};

export default HeaderWithLogo;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
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
