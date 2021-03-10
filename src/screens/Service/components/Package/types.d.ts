import {StyleProp, ViewStyle} from 'react-native';

type PackageProps = {
  style?: StyleProp<ViewStyle>;
  service: Service;
};

type PackageFC = (props: PackageProps) => JSX.Element;
