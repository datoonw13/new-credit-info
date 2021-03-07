type TabProps = {
  title: string;
  onPress: () => void;
  rounded: 'none' | 'left' | 'right';
  dateType: SelectedDate;
  activeDateType: SelectedDate;
};

type TabFC = (props: TabProps) => JSX.Element;
