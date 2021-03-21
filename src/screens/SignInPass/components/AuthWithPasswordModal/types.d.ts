type AuthWithPasswordModalProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onBackdropPress: () => void;
};

type AuthWithPasswordModalFC = (
  props: AuthWithPasswordModalProps,
) => JSX.Element;

type AuthData = {
  password: string;
};
