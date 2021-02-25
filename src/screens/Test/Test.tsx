import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
// import TouchId from 'react-native-touch-id';
import {Modal, Text, Button} from 'components';
import {show} from 'utils/modal'

const Test = () => {
  return (
    <>
      <SafeAreaView />
        <Button text="show modal" onPress={show} />
    </>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginHorizontal: 20,
  },
});
