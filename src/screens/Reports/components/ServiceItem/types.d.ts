type ServiceItemProps = {
  marginedLeft?: boolean;
  marginedRight?: boolean;
  serviceType: ServiceType;
  onPress: () => void;
};

type ServiceItemFC = (props: ServiceItemProps) => JSX.Element;
