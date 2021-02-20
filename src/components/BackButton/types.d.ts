import {StyleProp, ViewStyle} from 'react-native';

type BackButtonProps = {
  style?: StyleProp<ViewStyle>;
};

type BackButtonFC = (props: BackButtonProps) => JSX.Element;
