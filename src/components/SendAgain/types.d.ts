type SendAgainProps = {
  phoneNumber?: string;
  sendAgainDuration?: number;
  customRequest?: () => Promise<void>;
};

type SubmitData = {
  phoneNumber: string;
};

type SendAgainFC = (props: SendAgainProps) => JSX.Element;
