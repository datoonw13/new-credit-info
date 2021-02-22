import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import BlueAction from 'components/BlueAction';
import {colors} from 'theme';
import {useNavigation} from '@react-navigation/native';

const RegisterBottomTab = () => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <BlueAction text="back" onPress={goBack} />
        <View style={styles.stepsWrapper}>
          <View style={[styles.step, styles.visited]} />
          <View style={[styles.step, styles.visited]} />
          <View style={[styles.step, styles.currentlyVisiting]} />
          <View style={[styles.step]} />
          <View style={[styles.step]} />
        </View>
      </View>
      <SafeAreaView />
    </View>
  );
};

export default RegisterBottomTab;

const styles = StyleSheet.create({
  container: {},
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  stepsWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  step: {
    width: 5,
    height: 5,
    backgroundColor: colors.blackOp2,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  visited: {
    backgroundColor: colors.secondGreen,
  },
  currentlyVisiting: {
    width: 15,
    backgroundColor: colors.crimson,
  },
});
