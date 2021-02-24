import {TextProps as NativeTextProps} from 'react-native';

type TextProps = {
  dontTranslate?: boolean;
  capsBold?: boolean;
  caps?: boolean;
  children: string;
  animated?: boolean;
} & NativeTextProps &
  any;

type TextPropsFC = (props: TextProps) => JSX.Element;
