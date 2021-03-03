type FAQItemProps = {
  question: string;
  answer: string;
};

type PassedProps = {
  activeFAQItem: null | number;
  setActiveFAQItem: (item: null | number) => void;
  id: number;
};

type FAQItemFC = (props: FAQItemProps & PassedProps) => JSX.Element;
