import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, DateSelectorModal} from 'components';
import {showDateSelector} from 'utils/modal';
import {ScrollView} from 'react-native-gesture-handler';

const Test = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      <DateSelectorModal />
      <Button text="button" onPress={showDateSelector} />
    </ScrollView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
