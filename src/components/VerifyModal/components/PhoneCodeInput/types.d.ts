import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

type PhoneCodeInputProps = {
  onTextChange: (text: string) => void;
};

type InputEvent = NativeSyntheticEvent<TextInputChangeEventData>;
