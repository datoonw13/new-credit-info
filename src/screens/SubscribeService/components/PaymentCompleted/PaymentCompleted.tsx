import {Text} from 'components';
import React from 'react';
import {View} from 'react-native';

const PaymentCompleted: PaymentCompletedFC = ({visible}) => {
  if (!visible) {
    return null;
  }

  return (
    <View>
      <Text>Payment Completed</Text>
    </View>
  );
};

export default PaymentCompleted;
