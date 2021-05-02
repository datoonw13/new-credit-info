import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {FancyIcon, Text} from 'components';
import {colors} from 'theme';
import * as SVG from 'assets/svg';

const DownloadReportHeader = () => {
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
  );
};

export default DownloadReportHeader;

const styles = StyleSheet.create({
  innerContainerHeader: {
    backgroundColor: colors.blackOp05,
    borderTopEndRadius: 32,
    borderTopStartRadius: 32,
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
    color: colors.blackOp5,
  },
});
