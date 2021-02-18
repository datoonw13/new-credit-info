import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as colors from 'theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {POPPINS_BOLD} from 'theme/fonts';

const PinKeyboard = ({onPress}) => {
  const onPressHandler = (value) => {
    onPress(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.pinRow}>
        <TouchableOpacity
          style={[styles.pinItem, styles.firstPinItem]}
          onPress={() => onPressHandler(1)}>
          <Text style={styles.pinItemText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pinItem}
          onPress={() => onPressHandler(2)}>
          <Text style={styles.pinItemText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pinItem}
          onPress={() => onPressHandler(3)}>
          <Text style={styles.pinItemText}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pinRow}>
        <TouchableOpacity
          style={[styles.pinItem, styles.firstPinItem]}
          onPress={() => onPressHandler(4)}>
          <Text style={styles.pinItemText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pinItem}
          onPress={() => onPressHandler(5)}>
          <Text style={styles.pinItemText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pinItem}
          onPress={() => onPressHandler(6)}>
          <Text style={styles.pinItemText}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pinRow}>
        <TouchableOpacity
          style={[styles.pinItem, styles.firstPinItem]}
          onPress={() => onPressHandler(7)}>
          <Text style={styles.pinItemText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pinItem}
          onPress={() => onPressHandler(8)}>
          <Text style={styles.pinItemText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pinItem}
          onPress={() => onPressHandler(9)}>
          <Text style={styles.pinItemText}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pinRow}>
        <TouchableOpacity
          style={[styles.pinItem, styles.firstPinItem]}
          onPress={() => onPressHandler('finger print')}>
          <MaterialIcons name="fingerprint" color={colors.GRAY1} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pinItem}
          onPress={() => onPressHandler(0)}>
          <Text style={styles.pinItemText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pinItem}
          onPress={() => onPressHandler('back')}>
          <Feather name="delete" color={colors.GRAY1} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PinKeyboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GRAY6,
  },
  pinRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  pinItem: {
    width: 93,
    height: 58,
    borderRadius: 14,
    marginLeft: 6,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstPinItem: {
    marginLeft: 0,
  },
  pinItemText: {
    fontSize: 18,
    fontFamily: POPPINS_BOLD,
    color: colors.black,
  },
  pinItemContent: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.black,
  },
});
