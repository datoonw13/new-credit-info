import {StyleProp, ViewStyle} from 'react-native';

type PinLineProps = {
  fillNumber: number;
  style?: StyleProp<ViewStyle>;
};

type PinLineFC = (props: PinLineProps) => JSX.Element;
