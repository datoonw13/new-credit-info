import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NumericKey, FingerPrintKey, DeleteKey} from './components';

const PinKeyboard: PinKeyboardFC = ({onPress, withoutFingerprint = false}) => {
  return (
    <View>
      <View style={styles.pinRow}>
        <NumericKey onPress={onPress} pinNumber={1} first />
        <NumericKey onPress={onPress} pinNumber={2} />
        <NumericKey onPress={onPress} pinNumber={3} />
      </View>
      <View style={styles.pinRow}>
        <NumericKey onPress={onPress} pinNumber={4} first />
        <NumericKey onPress={onPress} pinNumber={5} />
        <NumericKey onPress={onPress} pinNumber={6} />
      </View>
      <View style={styles.pinRow}>
        <NumericKey onPress={onPress} pinNumber={7} first />
        <NumericKey onPress={onPress} pinNumber={8} />
        <NumericKey onPress={onPress} pinNumber={9} />
      </View>
      <View style={[styles.pinRow, styles.lastRow]}>
        <FingerPrintKey onPress={onPress} show={!withoutFingerprint} />
        <NumericKey onPress={onPress} pinNumber={0} />
        <DeleteKey onPress={onPress} />
      </View>
    </View>
  );
};

export default PinKeyboard;

const styles = StyleSheet.create({
  pinRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  lastRow: {
    justifyContent: 'flex-end',
  },
});
