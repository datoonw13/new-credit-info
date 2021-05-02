type ReportItemProps = {
  color: string;
  used?: boolean;
};

interface ReportItemFC {
  (props: ReportItemProps): JSX.Element;
}
