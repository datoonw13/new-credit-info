import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

type PersonalDataInputProps = {
  rightIconPressHandler?: () => void;
  inputPressHandler?: () => void;
  onChangeText: (text: string) => void;
  errorMessage?: string;
  rightIcon?: JSX.Element;
  label: string;
  value: string;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  verified?: boolean;
  onVerifyPress?: () => void;
} & TextInputProps;

type UseInputProps = {
  errorMessage?: string;
};

type PersonalDataInputFC = (props: PersonalDataInputProps) => JSX.Element;
