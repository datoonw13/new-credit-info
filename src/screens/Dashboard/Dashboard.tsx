import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LightAction, Text} from 'components';
import {useNavigation, DrawerActions} from '@react-navigation/core';

const Dashboard = () => {
  const {dispatch} = useNavigation();

  const openDrawer = () => dispatch(DrawerActions.openDrawer());

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>

      <LightAction
        textStyle={styles.buttonText}
        onPress={openDrawer}
        style={styles.button}
        text="Drawer"
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
  },
});
