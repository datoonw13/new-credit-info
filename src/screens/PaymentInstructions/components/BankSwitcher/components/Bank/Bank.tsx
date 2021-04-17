import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {BOGImage, TBCImage} from 'assets/images';
// import {colors} from 'theme';
import {BankFC} from './types';

const Bank: BankFC = ({active, type, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, active ? styles.active : {}]}
      onPress={() => onPress(type)}>
      {type === 'BOG' ? (
        <Image
          source={BOGImage}
          style={styles.bankImage}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={TBCImage}
          style={styles.bankImage}
          resizeMode="contain"
        />
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
    // backgroundColor: colors.white,
  },
  bankImage: {
    height: 40,
    borderRadius: 12,
  },
});
