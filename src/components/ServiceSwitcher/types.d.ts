import {Dispatch, SetStateAction} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

type ServiceSwitcherProps = {
  style?: StyleProp<ViewStyle>;
  onPress: Dispatch<SetStateAction<ServiceType>>;
  serviceType: ServiceType;
};

type ServiceSwitcherFC = (props: ServiceSwitcherProps) => JSX.Element;
