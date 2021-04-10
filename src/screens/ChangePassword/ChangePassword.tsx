import {BaseHeader, Text} from 'components';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const ChangePassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BaseHeader title="changePassword.title" />
      <Text>ChangePassword</Text>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});
