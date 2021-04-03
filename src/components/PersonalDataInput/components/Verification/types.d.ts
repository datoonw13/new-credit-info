type VerificationProps = {
  verified?: boolean;
  onVerifyPress?: () => void;
};

type VerificationFC = (props: VerificationProps) => JSX.Element | null;
