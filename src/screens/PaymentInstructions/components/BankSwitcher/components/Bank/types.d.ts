import {BankType} from 'screens/PaymentInstructions/components/BankSwitcher/types';

type BankProps = {
  active?: boolean;
  type: BankType;
  onPress: (type: BankType) => void;
};

type BankFC = (props: BankProps) => JSX.Element;
