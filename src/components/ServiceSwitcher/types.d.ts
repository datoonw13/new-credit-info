import {StyleProp, ViewStyle} from 'react-native';

type ServiceSwitcherProps = {
  style?: StyleProp<ViewStyle>;
  onPress: (type: ServiceType) => void;
  serviceType: ServiceType;
};

type ServiceSwitcherFC = (props: ServiceSwitcherProps) => JSX.Element;
