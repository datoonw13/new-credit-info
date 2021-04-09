import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

type PhoneCodeInputProps = {
  onTextChange: (text: string) => void;
};

type PhoneCodeInputFC = (props: PhoneCodeInputProps) => JSX.Element;

type InputEvent = NativeSyntheticEvent<TextInputChangeEventData>;
