import {PinKeyboard, PinLine} from 'components';
import React from 'react';
import {View} from 'react-native';

const PasscodeInput = () => {
  return (
    <View>
      <PinLine fillNumber={3} />
      <PinKeyboard onPress={() => {}} withoutFingerprint />
    </View>
  );
};

export default PasscodeInput;
