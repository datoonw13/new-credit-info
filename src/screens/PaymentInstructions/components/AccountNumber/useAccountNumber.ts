import Clipboard from '@react-native-community/clipboard';
import {useCallback} from 'react';

const useAccountNumber = (accountNumber: string) => {
  /**
   * Copy account number to clipboard.
   */
  const copyToClipboard = useCallback(() => {
    Clipboard.setString(accountNumber);
  }, [accountNumber]);

  return {
    copyToClipboard,
  };
};

export default useAccountNumber;
