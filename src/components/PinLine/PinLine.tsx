import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as colors from 'theme/colors';

const PinLine: PinLineFC = ({fillNumber}) => {
  const pinList = new Array(6).fill(false);
  return (
    <View style={styles.pinContent}>
      {pinList.map((item, index) => (
        <View style={[styles.pinItem, !index && {marginLeft: 0}]} key={index}>
          {fillNumber > index && <View style={styles.pinItemContent} />}
        </View>
      ))}
    </View>
  );
};

export default PinLine;

const styles = StyleSheet.create({
  pinContent: {
    flexDirection: 'row',
  },
  pinItem: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginLeft: 12,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinItemContent: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.black,
  },
});
