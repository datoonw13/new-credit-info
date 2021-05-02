type BaseBottomSheetModalProps = {
  title: string;
  modalHeight?: string;
  children: JSX.Element | JSX.Element[];
  onDismiss?: () => void;
};
