type SelectedDate = 'year' | 'month' | 'day';

type DateSelectorModalProps = {
  setDateSelectorVisible: (visible: boolean) => void;
  dateSelectorVisible: boolean;
  activeDate?: Date;
  isPerson: boolean;
  setDate: (date: Date) => void;
};

type DateSelectorModalFC = (props: DateSelectorModalProps) => JSX.Element;

type UseDateSelector = Omit<
  DateSelectorModalProps,
  'setDateSelectorVisible' | 'dateSelectorVisible'
>;
