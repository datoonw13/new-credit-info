type PasscodeInputProps = {
  onPasscodeChange: (val: number) => void;
  valueLength: number;
  title: string;
};

type PasscodeView = 'SetPasscode' | 'RepeatPasscode';

type PasscodeInputFC = (props: PasscodeInputProps) => JSX.Element;
