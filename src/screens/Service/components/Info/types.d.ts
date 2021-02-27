import {StyleProp, ViewStyle} from 'react-native';

type InfoProps = {
  style?: StyleProp<ViewStyle>;
  text: string;
};

type InfoFC = (props: InfoProps) => JSX.Element;
