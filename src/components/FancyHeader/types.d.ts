import {StyleProp, ViewStyle} from 'react-native';

type FancyHeaderProps = {
  title: string;
  hideBackButton?: boolean;
  style?: StyleProp<ViewStyle>;
};

type FancyHeaderFC = (props: FancyHeaderProps) => JSX.Element;
