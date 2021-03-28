type NumericKeyProps = {
  onPress: (pinNumber: number) => void;
  pinNumber: number;
  first?: boolean;
};

type NumericKeyFC = (props: NumericKeyProps) => JSX.Element;
