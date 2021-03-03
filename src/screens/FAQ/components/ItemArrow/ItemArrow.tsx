import React from 'react';
import {StyleSheet} from 'react-native';
import {Arrow} from 'assets/svg';
import {ItemArrowFC} from './types';

const ItemArrow: ItemArrowFC = ({open, width, height, style}) => {
  return (
    <Arrow
      style={[styles.arrow, open && styles.arrowOpened, style]}
      height={height ?? 10}
      width={width ?? 10}
    />
  );
};

export default ItemArrow;

const styles = StyleSheet.create({
  arrow: {
    transform: [
      {
        rotateZ: '270deg',
      },
    ],
  },
  arrowOpened: {
    transform: [
      {
        rotateZ: '90deg',
      },
    ],
  },
});
