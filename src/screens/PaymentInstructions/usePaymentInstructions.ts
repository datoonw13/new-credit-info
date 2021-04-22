import {useEffect, useState} from 'react';
import {BankType} from './components/BankSwitcher/types';
import {accounts} from './config';

const usePaymentInstructions = () => {
  const [selectedBank, setSelectedBank] = useState<BankType>('BOG');
  const [accountNumber, setAccountNumber] = useState<string>(accounts.bog);

  /**
   * Switch account number based on selected bank.
   */
  useEffect(() => {
    if (selectedBank === 'BOG') {
      setAccountNumber(accounts.bog);
    } else {
      setAccountNumber(accounts.tbc);
    }
  }, [selectedBank]);

  return {
    selectedBank,
    accountNumber,
    setSelectedBank,
  };
};

export default usePaymentInstructions;
