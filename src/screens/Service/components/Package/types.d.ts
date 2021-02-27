import {StyleProp, ViewStyle} from 'react-native';

type PackageProps = {
  style?: StyleProp<ViewStyle>;
};

type PackageFC = (props: PackageProps) => JSX.Element;
