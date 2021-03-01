import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button} from 'components';
import {showNotificationsListModal} from 'utils/modal';
import {ScrollView} from 'react-native-gesture-handler';

const Test = () => {
  useEffect(() => {
    showNotificationsListModal();
  }, []);
  return (
    <ScrollView style={{flex: 1}}>
      <SafeAreaView />
      <Button text="continue" onPress={showNotificationsListModal} />
    </ScrollView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginHorizontal: 20,
  },
});
