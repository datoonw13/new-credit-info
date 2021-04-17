import {StyleProp, ViewStyle} from 'react-native';

type BankSwitcherProps = {
  style?: StyleProp<ViewStyle>;
  onPress: (type: BankType) => void;
  selected: BankType;
};

type BankType = 'BOG' | 'TBC';

type BankSwitcherFC = (props: BankSwitcherProps) => JSX.Element;
