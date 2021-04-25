import {StyleProp, ViewStyle} from 'react-native';

type PackageProps = {
  style?: StyleProp<ViewStyle>;
  service: Service;
  onSubscribePress?: () => void;
};

type PackageFC = (props: PackageProps) => JSX.Element;
