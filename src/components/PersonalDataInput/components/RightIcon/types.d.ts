type RightIconProps = {
  onIconPressHandler?: () => void;
  Icon?: JSX.Element;
  show: boolean;
};

type RightIconFC = (props: RightIconProps) => JSX.Element | null;
