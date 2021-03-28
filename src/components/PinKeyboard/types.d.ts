type PinKeyboardProps = {
  onPress: (val: number) => void;
  withoutFingerprint?: boolean;
};

type PinKeyboardFC = (props: PinKeyboardProps) => JSX.Element;
