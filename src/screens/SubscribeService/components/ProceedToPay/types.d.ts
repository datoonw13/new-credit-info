type ProceedToPayProps = {
  visible: boolean;
  handler: () => void;
};

interface ProceedToPayFC {
  (props: ProceedToPayProps): JSX.Element | null;
}
