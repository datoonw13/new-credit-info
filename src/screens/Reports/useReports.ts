import {alertInfo} from 'utils/dropdownAlert';

const useReports = () => {
  /**
   * Download user's yearly report.
   */
  const onReportDownloadPress = () => {
    alertInfo('', 'Not yet implemented!');
  };

  /**
   * Send user's yearly report to someone.
   */
  const onSendReportToSomeone = () => {
    alertInfo('', 'Not yet implemented!');
  };

  /**
   * Handle standard service purchase.
   */
  const onStandardPurchasePress = () => {
    alertInfo('', 'Not yet implemented!');
  };

  /**
   * Handle premium service purchase.
   */
  const onPremiumPurchasePress = () => {
    alertInfo('', 'Not yet implemented!');
  };

  return {
    onReportDownloadPress,
    onSendReportToSomeone,
    onStandardPurchasePress,
    onPremiumPurchasePress,
  };
};

export default useReports;
