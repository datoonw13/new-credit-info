type ListSelectorProps = {
  activeElement?: number;
  data: number[];
  onSelect: (elem: number) => void;
};

type UseListSelector = ListSelectorProps;

type ListSelectorFC = (props: ListSelectorProps) => JSX.Element;
