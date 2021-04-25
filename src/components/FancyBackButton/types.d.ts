import {StyleProp, ViewStyle} from 'react-native';

type FancyBackButtonProps = {
  visible?: boolean;
  style?: StyleProp<ViewStyle>;
};

type FancyBackButtonFC = (props: FancyBackButtonProps) => JSX.Element | null;
