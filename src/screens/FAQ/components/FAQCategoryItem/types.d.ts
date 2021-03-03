type FAQCategoryItemProps = {
  id: number;
  name: string;
  records: FAQ[];
};

type FAQCategoryItemPassedProps = {
  id: number;
  activeFAQCategoryItem: null | number;
  setActiveFAQCategoryItem: (item: null | number) => void;
};

type FAQCategoryItemFC = (
  props: FAQCategoryItemProps & FAQCategoryItemPassedProps,
) => JSX.Element;
