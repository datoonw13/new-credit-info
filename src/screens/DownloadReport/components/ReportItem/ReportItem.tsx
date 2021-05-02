import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'components';
import * as SVG from 'assets/svg';
import {useTranslation} from 'react-i18next';
import {colors} from 'theme';

const ReportItem: ReportItemFC = ({color, used = false}) => {
  const {t} = useTranslation();
  const statusText = used ? 'downloadReport.used' : 'downloadReport.unused';

  return (
    <View
      style={[styles.container, used && {backgroundColor: colors.blackOp1}]}>
      <View style={styles.innerLeftContainer}>
        <View
          style={[
            styles.iconWrapper,
            {backgroundColor: color},
            used && styles.blurry,
          ]}>
          <SVG.ReportItem />
        </View>
        <Text style={styles.reportText}>{t('downloadReport.report')}</Text>
      </View>
      <View
        style={[styles.statusWrapper, used && {borderColor: colors.crimson}]}>
        <View
          style={[
            styles.statusCircle,
            used && {backgroundColor: colors.crimson},
          ]}
        />
        <Text style={[styles.statusText, used && {color: colors.crimson}]}>
          {t(statusText)}
        </Text>
      </View>
    </View>
  );
};

export default ReportItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 62,
    borderWidth: 1,
    borderColor: colors.blackOp1,
    borderRadius: 12,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.blackOp025,
  },
  innerLeftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: 12,
    paddingHorizontal: 7,
    paddingVertical: 12,
    borderRadius: 21,
  },
  reportText: {
    fontSize: 13,
  },
  statusWrapper: {
    borderWidth: 1,
    borderColor: colors.blackOp1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusCircle: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginRight: 6,
    backgroundColor: colors.green,
  },
  statusText: {
    fontSize: 12,
  },
  blurry: {
    opacity: 0.6,
  },
});
