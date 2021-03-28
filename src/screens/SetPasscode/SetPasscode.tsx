import React from 'react';
import {SafeAreaView} from 'react-native';
import {BaseHeader, Text} from 'components';
import {PasscodeInput} from './components';

const SetPasscode = () => {
  return (
    <SafeAreaView>
      <BaseHeader />
      <Text>Set Passcode</Text>
      <PasscodeInput />
    </SafeAreaView>
  );
};

export default SetPasscode;
