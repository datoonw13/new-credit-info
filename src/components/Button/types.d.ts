import {StyleProp, TextStyle, ViewStyle} from 'react-native';

type ButtonProps = {
  containerStyle?: StyleProp<ViewStyle>;
  touchableStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  disabled?: boolean;
  text: string;
};

type ButtonFC = (props: ButtonProps) => JSX.Element;
