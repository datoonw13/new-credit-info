import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

type InputProps = {
  rightIconPressHandler?: () => void;
  inputPressHandler?: () => void;
  labelOnBorderToo?: boolean;
  onChangeText: (text: string) => void;
  errorMessage?: string;
  notRequired?: boolean;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  label: string;
  value: string;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  reverseError?: boolean;
} & TextInputProps;

type UseInputProps = {
  errorMessage?: string;
};

type InputFC = (props: InputProps) => JSX.Element;
