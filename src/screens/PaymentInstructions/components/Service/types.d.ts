import {StyleProp, ViewStyle} from 'react-native';

type ServiceProps = {
  style?: StyleProp<ViewStyle>;
  serviceType: ServiceType;
  time: string;
  price: string;
  value: boolean;
  onSwitch: (value: boolean) => void;
};

type ServiceFC = (props: ServiceProps) => JSX.Element;
