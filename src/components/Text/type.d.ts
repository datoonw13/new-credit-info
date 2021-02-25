import {TextProps as NativeTextProps} from 'react-native';

type TextProps = {
  dontTranslate?: boolean;
  capsBold?: boolean;
  caps?: boolean;
  children: string;
  animated?: boolean;
} & NativeTextProps;

type TextPropsFC = (props: TextProps) => JSX.Element;
