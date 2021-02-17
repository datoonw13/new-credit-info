import {TextInputProps} from 'react-native';

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
} & TextInputProps;

type InputFC = (props: InputProps) => JSX.Element;
