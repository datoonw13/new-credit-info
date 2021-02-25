import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button} from 'components';
import {showSentOTPModal} from 'utils/modal';

const Test = () => {
  useEffect(() => {
    showSentOTPModal();
  }, []);
  return (
    <>
      <SafeAreaView />
      <Button text="show modal" onPress={showSentOTPModal} />
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
