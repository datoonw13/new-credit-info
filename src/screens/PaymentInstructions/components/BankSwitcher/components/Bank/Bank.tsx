import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {BOGLogo, TBCLogo} from 'assets/svg';
import {colors} from 'theme';
import {BankFC} from './types';

const Bank: BankFC = ({active, type, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, active ? styles.active : {}]}
      onPress={() => onPress(type)}>
      {type === 'BOG' ? (
        <BOGLogo width="90%" />
      ) : (
        <TBCLogo width="90%" style={styles.tbcShift} />
      )}
    </TouchableOpacity>
  );
};

export default Bank;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 42,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 12,
  },
  active: {
    backgroundColor: colors.white,
  },
  tbcShift: {
    marginBottom: 3,
  },
});
