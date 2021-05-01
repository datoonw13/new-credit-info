import React from 'react';
import {View} from 'react-native';
import {Text} from 'components';

const ProceedToPay: ProceedToPayFC = ({visible}) => {
  if (!visible) {
    return null;
  }

  return (
    <View>
      <Text>Proceed To Pay</Text>
    </View>
  );
};

export default ProceedToPay;
