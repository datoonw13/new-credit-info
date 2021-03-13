type IdentityFormData = {
  username: string;
};

type IdentifyProps = {
  setStep: (val: ForgotPasswordStep) => void;
  setUsername: (val: string) => void;
} & IdentityFormData;

type UseIdentity = Omit<IdentifyProps, 'setUsername'>;

type IdentifyFC = (props: IdentifyProps) => JSX.Element;
