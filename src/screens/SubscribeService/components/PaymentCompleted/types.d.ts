type PaymentCompletedProps = {
  visible: boolean;
};

interface PaymentCompletedFC {
  (props: PaymentCompletedProps): JSX.Element | null;
}
