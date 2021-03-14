import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button} from 'components';
import {ScrollView} from 'react-native-gesture-handler';
import {resetStoreAction} from 'store/auth/actions';
import {useDispatch} from 'react-redux';

const Test = () => {
  const dispatch = useDispatch();

  const logout = () => dispatch(resetStoreAction());

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      <Button text="logout" onPress={logout} />
    </ScrollView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
