import {SvgProps} from 'react-native-svg';

type ReportItemProps = {
  HeadingIcon: React.StatelessComponent<SvgProps>;
  headingIconBg: string;
  ActionIcon: React.StatelessComponent<SvgProps>;
  heading: string;
  description: string;
};

type ReportItemFC = (props: ReportItemProps) => JSX.Element;
