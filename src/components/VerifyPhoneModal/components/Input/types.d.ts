import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

type InputProps = {
  onTextChange: (text: string) => void;
};

type InputFC = (props: InputProps) => JSX.Element;

type InputEvent = NativeSyntheticEvent<TextInputChangeEventData>;
