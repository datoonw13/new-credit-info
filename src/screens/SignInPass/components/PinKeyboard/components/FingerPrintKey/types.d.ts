type FingerPrintKeyProps = {
  onPress: (pinNumber: number) => void;
};

type FingerPrintKeyFC = (props: FingerPrintKeyProps) => JSX.Element;
