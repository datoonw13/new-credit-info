import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Logo} from 'assets/svg';
import {colors} from 'theme';

const Opening = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <ActivityIndicator
        style={styles.indicator}
        color={colors.crimson}
        size={60}
      />
    </View>
  );
};

export default Opening;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  indicator: {
    marginTop: 40,
  },
});
