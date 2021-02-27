import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button} from 'components';
import {showSentOTPModal} from 'utils/modal';
import * as services from 'services';
import {ScrollView} from 'react-native-gesture-handler';
import HTML from 'react-native-render-html';

const Test = () => {
  const [agreement, setAgreement] = useState('<p></p>');
  useEffect(() => {
    services
      .getCustomerAgreement()
      .then(({agreement: content}) => setAgreement(content))
      .catch(console.log);
  }, []);
  return (
    <ScrollView style={{flex: 1}}>
      <HTML source={{html: agreement}} />
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
