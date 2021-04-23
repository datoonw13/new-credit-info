type ScoreTabProps = {
  rating: string;
  start?: string;
  end?: string;
  color: string;
  roundLeft?: boolean;
  roundRight?: boolean;
};

type ScoreTabFC = (props: ScoreTabProps) => JSX.Element;
