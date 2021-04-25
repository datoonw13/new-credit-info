import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Arrow} from 'assets/svg';
import {useNavigation} from '@react-navigation/native';
import {colors} from 'theme';
import {FancyBackButtonFC} from './types';

const FancyBackButton: FancyBackButtonFC = ({visible = true, style}) => {
  const {goBack} = useNavigation();

  return visible === true ? (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={goBack}
      hitSlop={styles.hitSlop}>
      <Arrow height={9} width={5} />
    </TouchableOpacity>
  ) : null;
};

export default FancyBackButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blackOp05,
    width: 28,
    height: 28,
    borderRadius: 9,
  },
  hitSlop: {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  },
  text: {
    marginLeft: 8,
    fontSize: 12,
  },
});
