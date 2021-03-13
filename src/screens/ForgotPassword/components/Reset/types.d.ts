type ResetProps = {
  username: string;
};

type ResetFC = (props: ResetProps) => JSX.Element;

type OnChangePassword = {
  password: string;
  repeatPassword: string;
};
