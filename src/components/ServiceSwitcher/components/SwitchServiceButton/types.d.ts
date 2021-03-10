type SwitchServiceButtonProps = {
  title: string;
  active?: boolean;
  type: ServiceType;
  onPress: (type: ServiceType) => void;
};

type SwitchServiceButtonFC = (props: SwitchServiceButtonProps) => JSX.Element;
