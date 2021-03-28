type FingerPrintKeyProps = {
  onPress: (pinNumber: number) => void;
  show: boolean;
};

type FingerPrintKeyFC = (props: FingerPrintKeyProps) => JSX.Element;
