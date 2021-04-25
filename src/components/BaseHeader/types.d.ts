type BaseHeaderProps = {
  title: string;
  hideBackButton?: boolean;
};

type BaseHeaderFC = (props: BaseHeaderProps) => JSX.Element;
