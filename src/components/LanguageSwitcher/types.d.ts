import {StyleProp, ViewStyle} from 'react-native';

type LanguageSwitcherProps = {
  style?: StyleProp<ViewStyle>;
};

type LanguageSwitcherFC = (props: LanguageSwitcherProps) => JSX.Element;
