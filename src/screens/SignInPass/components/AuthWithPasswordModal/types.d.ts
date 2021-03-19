type AuthWithPasswordModalProps = {
  visible: boolean;
  onBackdropPress: () => void;
};

type AuthWithPasswordModalFC = (
  props: AuthWithPasswordModalProps,
) => JSX.Element;
