import {useNavigation} from '@react-navigation/native';

const useReports = () => {
  const {navigate} = useNavigation();

  /**
   * Download user's yearly report.
   */
  const onReportDownloadPress = () => {
    navigate('DownloadReport');
  };

  /**
   * Send user's yearly report to someone.
   */
  const onSendReportToSomeone = () => {
    navigate('SendReport');
  };

  /**
   * Handle standard service purchase.
   */
  const onStandardPurchasePress = () => {
    navigate('SubscribeService');
  };

  /**
   * Handle premium service purchase.
   */
  const onPremiumPurchasePress = () => {
    navigate('SubscribeService');
  };

  return {
    onReportDownloadPress,
    onSendReportToSomeone,
    onStandardPurchasePress,
    onPremiumPurchasePress,
  };
};

export default useReports;
