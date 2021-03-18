import {StyleProp, TextStyle, ViewStyle} from 'react-native';

type LightActionProps = {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  color?: string;
};

type LightActionFC = (props: LightActionProps) => JSX.Element;
