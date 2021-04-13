import {StyleProp, ViewStyle} from 'react-native';

type AccountNumberProps = {
  accountNumber: string;
  style?: StyleProp<ViewStyle>;
};

type AccountNumberFC = (props: AccountNumberProps) => JSX.Element;
