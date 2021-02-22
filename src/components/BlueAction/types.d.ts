import {StyleProp, TextStyle, ViewStyle} from 'react-native';

type BlueActionProps = {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

type BlueActionFC = (props: BlueActionProps) => JSX.Element;
