import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button} from 'components';
import {showDateSelector} from 'utils/modal';
import {ScrollView} from 'react-native-gesture-handler';

const Test = () => {
  useEffect(() => {
    showDateSelector();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
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
