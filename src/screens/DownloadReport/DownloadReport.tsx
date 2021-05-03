import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FancyHeader, Divider, Button} from 'components';
import {DownloadReportHeader, ReportItem} from './components';
import * as SVG from 'assets/svg';
import {colors} from 'theme';
import {useTranslation} from 'react-i18next';

const DownloadReport = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <FancyHeader title="downloadReport.title" style={styles.header} />
        <Divider width="100%" />
        <SVG.DownloadReportImage style={styles.downloadReportImage} />
        <View style={styles.innerContainer}>
          <DownloadReportHeader />
          <Text style={styles.availableReportsText}>
            {t('downloadReport.availableReport')}
          </Text>
          <ReportItem color={colors.green} />
          <ReportItem color={colors.purple} />
          <ReportItem color={colors.purple} used />
          <Button
            text="download"
            containerStyle={styles.downloadButton}
            textStyle={styles.downloadButtonText}
            touchableStyle={styles.downloadButtonContainer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DownloadReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  scrollViewContainer: {
    flex: 1,
  },
  header: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  downloadReportImage: {
    alignSelf: 'center',
    marginVertical: 26,
  },
  innerContainer: {
    backgroundColor: colors.white,
    flex: 1,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 32,
    padding: 5,
    paddingBottom: 20,
  },
  availableReportsText: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 6,
    marginBottom: 15,
  },
  downloadButtonContainer: {
    marginTop: 16,
  },
  downloadButton: {
    backgroundColor: colors.strangeBlueOp1,
  },
  downloadButtonText: {
    color: colors.blue,
  },
});
