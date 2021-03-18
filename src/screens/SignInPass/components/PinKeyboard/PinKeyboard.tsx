import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NumericKey, FingerPrintKey, DeleteKey} from './components';

const PinKeyboard = ({onPress}) => {
  const onPressHandler = (value: Number) => {
    onPress(value);
  };
  return (
    <View>
      <View style={styles.pinRow}>
        <NumericKey onPress={onPressHandler} pinNumber={1} first />
        <NumericKey onPress={onPressHandler} pinNumber={2} />
        <NumericKey onPress={onPressHandler} pinNumber={3} />
      </View>
      <View style={styles.pinRow}>
        <NumericKey onPress={onPressHandler} pinNumber={4} first />
        <NumericKey onPress={onPressHandler} pinNumber={5} />
        <NumericKey onPress={onPressHandler} pinNumber={6} />
      </View>
      <View style={styles.pinRow}>
        <NumericKey onPress={onPressHandler} pinNumber={7} first />
        <NumericKey onPress={onPressHandler} pinNumber={8} />
        <NumericKey onPress={onPressHandler} pinNumber={9} />
      </View>
      <View style={styles.pinRow}>
        <FingerPrintKey onPress={onPressHandler} />
        <NumericKey onPress={onPressHandler} pinNumber={0} />
        <DeleteKey onPress={onPressHandler} />
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
});
