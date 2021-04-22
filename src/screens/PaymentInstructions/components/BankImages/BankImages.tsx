import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as SVG from 'assets/svg';
import {BankImagesFC} from './types';

const BankImages: BankImagesFC = ({bankType}) => {
  return (
    <View style={styles.container}>
      {bankType === 'BOG' && <SVG.BOGPhone width="30%" />}
      {bankType === 'BOG' && <SVG.BOGLaptop width="70%" />}
      {bankType === 'TBC' && <SVG.TBCPhone width="30%" />}
      {bankType === 'TBC' && <SVG.TBCLaptop width="70%" />}
    </View>
  );
};

export default BankImages;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
});
