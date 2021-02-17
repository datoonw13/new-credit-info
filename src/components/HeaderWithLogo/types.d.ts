import {StyleProp, ViewStyle} from 'react-native';

type HeaderWithLogoProps = {
  mode?: 'Left' | 'Middle' | 'Right' | 'WithMenu';
  style?: StyleProp<ViewStyle>;
};

type HeaderWithLogoFC = (props: HeaderWithLogoProps) => JSX.Element;
