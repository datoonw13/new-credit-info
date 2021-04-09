import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

type EmailCodeInputProps = {
  onTextChange: (text: string) => void;
};

type InputEvent = NativeSyntheticEvent<TextInputChangeEventData>;
