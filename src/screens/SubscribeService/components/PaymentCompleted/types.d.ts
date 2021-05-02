type PaymentCompletedProps = {
  visible: boolean;
  closeModal: () => void;
};

interface PaymentCompletedFC {
  (props: PaymentCompletedProps): JSX.Element | null;
}
