type ChooseYearProps = {
  activeYear?: number;
  visible: boolean;
  chooseYear: (year: number) => void;
};

type ChooseYearFC = (props: ChooseYearProps) => JSX.Element;
