type SubscribeButtonProps = {
  onPress: () => void;
  visible?: boolean;
};

type SubscribeButtonFC = (props: SubscribeButtonProps) => JSX.Element | null;
