import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'theme';
import {DividerFC} from './types';

const Divider: DividerFC = ({width = '100%', style}) =>
  width ? <View style={[styles.container, style, {width}]} /> : null;

export default Divider;

const styles = StyleSheet.create({
  container: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.blackOp1,
    alignSelf: 'flex-end',
    marginTop: 15,
    marginBottom: 15,
  },
});
