import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, Text, AgreementModal} from 'components';
import {ScrollView} from 'react-native-gesture-handler';
import {signOut} from 'store/auth/sagaActions';
import {useDispatch} from 'react-redux';

const Test = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const logout = () => dispatch(signOut());

  useEffect(() => {
    setTimeout(() => setShowModal(true), 3000);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      <Text style={styles.text}>Logged In!</Text>
      <Button touchableStyle={styles.button} text="logout" onPress={logout} />
      {showModal && <AgreementModal />}
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
});
