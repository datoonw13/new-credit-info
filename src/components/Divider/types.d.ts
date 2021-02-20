import {StyleProp, ViewStyle} from 'react-native';

type DividerProps = {
  width: string | null;
  style?: StyleProp<ViewStyle>;
};

type DividerFC = (props: DividerProps) => JSX.Element | null;
