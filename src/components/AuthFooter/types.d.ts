type AuthFooterProps = {
  mode: 'link' | 'goback';
  handler: () => void;
  text?: string;
  link?: string;
};

type AuthFooterFC = (props: AuthFooterProps) => JSX.Element;
