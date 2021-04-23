import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {HeaderWithLogo} from 'components';
import * as SVG from 'assets/svg';
import {ReportItem, Scoring, ServiceItem} from './components';
import {colors} from 'theme';
import useReports from './useReports';

const Reports = () => {
  const {
    onReportDownloadPress,
    onSendReportToSomeone,
    onPremiumPurchasePress,
    onStandardPurchasePress,
  } = useReports();
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderWithLogo mode="WithMenu" />
      <ReportItem
        headingIconBg={colors.strangeBlueOp1}
        actionIconBg={colors.greenOp2}
        HeadingIcon={SVG.DownloadReport}
        description="reports.checkCreditHistory"
        ActionIcon={SVG.DownloadReportAction}
        heading="reports.download"
        onPress={onReportDownloadPress}
      />
      <ReportItem
        headingIconBg={colors.strangeBlueOp2}
        actionIconBg={colors.black}
        HeadingIcon={SVG.SendReport}
        description="reports.sendReportToSomeone"
        ActionIcon={SVG.SendReportAction}
        heading="reports.sendReport"
        onPress={onSendReportToSomeone}
      />
      <Scoring />
      <View style={styles.serviceItemsWrapper}>
        <ServiceItem
          onPress={onStandardPurchasePress}
          serviceType="STANDARD"
          marginedRight
        />
        <ServiceItem
          onPress={onPremiumPurchasePress}
          serviceType="PREMIUM"
          marginedLeft
        />
      </View>
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackOp025,
    flex: 1,
    paddingTop: 10,
  },
  serviceItemsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 22,
  },
});
