import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import {colors} from 'theme';
// import {Button, Text} from 'components';
// import {signOut} from 'store/auth/sagaActions';
// import {useDispatch} from 'react-redux';

const Test = () => {
  // const dispatch = useDispatch();

  // const logout = () => dispatch(signOut());

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      {/* <Text style={styles.text}>Logged In!</Text> */}
      {/* <Button touchableStyle={styles.button} text="logout" onPress={logout} /> */}
      <View style={styles.simulator} />
    </ScrollView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
  },
  button: {
    alignSelf: 'center',
    width: '70%',
  },
  simulator: {
    width: 300,
    height: 300,
    backgroundColor: colors.strangeBlue,
    alignSelf: 'center',
    marginTop: 150,
    borderRadius: 300,
  },
});
