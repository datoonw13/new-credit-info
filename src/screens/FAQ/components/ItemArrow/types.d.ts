import {StyleProp, ViewStyle} from 'react-native';

type ItemArrowProps = {
  open: boolean;
  height?: number;
  width?: number;
  style?: StyleProp<ViewStyle>;
  color?: string;
};

type ItemArrowFC = (props: ItemArrowProps) => JSX.Element;
