type SelectProps = {
  setSelectVisible: (val: boolean) => void;
  activeElement: any;
  setActiveElement: (el: any) => void;
  visible: boolean;
  data: any[];
  keyExtractor: (el: any) => any;
  valueExtractor: (val: any) => any;
  title?: string;
};

interface SelectFC {
  (props: SelectProps): JSX.Element;
}
