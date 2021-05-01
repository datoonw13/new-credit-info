type HeaderProps = {
  title?: string;
  visible: boolean;
};

interface HeaderFC {
  (props: HeaderProps): JSX.Element | null;
}
