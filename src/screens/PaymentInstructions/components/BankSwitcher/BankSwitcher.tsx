import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'theme';
import {Bank} from './components';
import {BankSwitcherFC} from './types';

const BankSwitcher: BankSwitcherFC = ({style, selected, onPress}) => {
  return (
    <View style={[styles.container, style]}>
      <Bank active={selected === 'BOG'} type="BOG" onPress={onPress} />
      <Bank active={selected === 'TBC'} type="TBC" onPress={onPress} />
    </View>
  );
};

export default BankSwitcher;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.strangeBlueOp1,
    paddingVertical: 8,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});
