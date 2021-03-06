type CalendarModalProps = {
  isVisible?: boolean;
  setModalVisible: (visible: boolean) => void;
  setDate: (date: any) => void;
  activeDate?: Date;
  isPerson: boolean;
};

type UseCalendarModalProps = Omit<CalendarModalProps, 'isVisible' | 'setDate'>;

type CalendarModalFC = (props: CalendarModalProps) => JSX.Element;
