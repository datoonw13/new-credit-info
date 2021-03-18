import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import LightAction from 'components/LightAction';
import {colors} from 'theme';
import useRegisterBottomTab from './useRegisterBottomTab';

const RegisterBottomTab = () => {
  const {currentlyVisiting, hasVisited, onBackPress} = useRegisterBottomTab();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <LightAction text="back" onPress={onBackPress} />
        <View style={styles.stepsWrapper}>
          <View style={[styles.step, hasVisited(1), currentlyVisiting(1)]} />
          <View style={[styles.step, hasVisited(2), currentlyVisiting(2)]} />
          <View style={[styles.step, hasVisited(3), currentlyVisiting(3)]} />
          <View style={[styles.step, hasVisited(4), currentlyVisiting(4)]} />
          <View style={[styles.step, hasVisited(5), currentlyVisiting(5)]} />
          <View style={[styles.step, hasVisited(6), currentlyVisiting(6)]} />
        </View>
      </View>
      <SafeAreaView />
    </View>
  );
};

export default RegisterBottomTab;

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
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
    marginRight: 5,
  },
});
