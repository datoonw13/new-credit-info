import {BankType} from 'screens/PaymentInstructions/components/BankSwitcher/types';

type BankImagesProps = {
  bankType: BankType;
};

type BankImagesFC = (props: BankImagesProps) => JSX.Element;
