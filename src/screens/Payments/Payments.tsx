import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'components';

const Payments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Payments</Text>
    </View>
  );
};

export default Payments;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
