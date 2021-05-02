type ChooseCardProps = {
  visible: boolean;
  handler: () => void;
};

type ChooseCardFC = (props: ChooseCardProps) => JSX.Element | null;
