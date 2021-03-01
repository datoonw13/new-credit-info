import {StyleProp, TextStyle, ViewStyle} from 'react-native';

type LightGreyButtonProps = {
  onPress?: () => void;
  touchableContainer?: StyleProp<ViewStyle>;
  contentContainer?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
};

type LightGreyButtonFC = (props: LightGreyButtonProps) => JSX.Element;
