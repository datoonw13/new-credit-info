type SendAgainProps = {
  phoneNumber: string;
  sendAgainDuration?: number;
};

type SubmitData = {
  phoneNumber: string;
};

type SendAgainFC = (props: SendAgainProps) => JSX.Element;
