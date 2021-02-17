type RegisterTabsProps = {
  currentStep: number;
  handler: (val: number) => void;
  lastStep: number;
};

type RegisterTabsFC = (props: RegisterTabsProps) => JSX.Element;
