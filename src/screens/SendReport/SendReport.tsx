import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {FancyHeader, Text} from 'components';
import {BalanceAndReportCost} from './components';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from 'theme';

const SendReport = () => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.scrollViewContainer}>
        <FancyHeader title="sendReport.title" />
        <BalanceAndReportCost balance={3.28} sendReportCost={2} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SendReport;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
