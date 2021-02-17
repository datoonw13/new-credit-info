type CalendarModalProps = {
  isVisible?: boolean;
  setModalVisible: (visible: boolean) => void;
  setDate: (date: any) => void;
  activeDate: any;
  isPerson: boolean;
};

type CalendarModalFC = (props: CalendarModalProps) => JSX.Element;
