import {StyleProp, ViewStyle} from 'react-native';

type AccountProps = {
  image: string;
  user: string;
  style?: StyleProp<ViewStyle>;
};

type AccountFC = (props: AccountProps) => JSX.Element;
