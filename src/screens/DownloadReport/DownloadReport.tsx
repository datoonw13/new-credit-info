import React, {useMemo} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {FancyHeader, Divider, FancyIcon, Text} from 'components';
import * as SVG from 'assets/svg';
import {colors} from 'theme';
import {useTranslation} from 'react-i18next';

const DownloadReport = () => {
  const {t} = useTranslation();

  const time = '12:26';
  const space = ' ';
  const numberOfFreeReports = 2;

  const reportAvailability = useMemo(
    () =>
      [
        t('downloadReport.updatedReport1'),
        time,
        t('downloadReport.updatedReport2'),
      ].join(' '),
    [time, t],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FancyHeader title="downloadReport.title" style={styles.header} />
      <Divider width="100%" />
      <SVG.DownloadReportImage style={styles.downloadReportImage} />
      <View style={styles.innerContainer}>
        <View style={styles.innerContainerHeader}>
          <View style={styles.innerContainerHeaderHeading}>
            <FancyIcon
              style={styles.innerContainerHeaderIcon}
              Icon={SVG.DownloadReportWhite}
              bg={colors.blue}
              dimensions={40}
              roundness={20}
            />
            <View style={styles.freeReportsTextsWrapper}>
              <Text>{t('downloadReport.freeReport1')}</Text>
              <Text>{space}</Text>
              <Text style={styles.freeReportsNumber}>
                {numberOfFreeReports.toString()}
              </Text>
              <Text>{space}</Text>
              {t('downloadReport.freeReport2')
                .split(' ')
                .map((word) => (
                  <Text key={word}>{word}</Text>
                ))}
            </View>
          </View>
          <Text style={styles.updatedReportText}>{reportAvailability}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DownloadReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
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
  },
  innerContainerHeader: {
    backgroundColor: colors.blackOp1,
    borderTopEndRadius: 32,
    borderTopStartRadius: 32,
    marginHorizontal: 5,
    marginTop: 5,
    padding: 22,
    paddingBottom: 17,
  },
  innerContainerHeaderHeading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainerHeaderIcon: {
    paddingTop: 2,
    paddingLeft: 2,
    marginRight: 10,
  },
  freeReportsTextsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
  },
  freeReportsNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  updatedReportText: {
    marginTop: 12,
    fontSize: 12,
  },
});
