import {StyleProp, ViewStyle} from 'react-native';

type ServiceProps = {
  style?: StyleProp<ViewStyle>;
  serviceType: ServiceType;
  time: string;
  price: string;
};

type ServiceFC = (props: ServiceProps) => JSX.Element;
