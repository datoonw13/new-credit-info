import {SvgProps} from 'react-native-svg';

type ReportItemProps = {
  HeadingIcon: React.StatelessComponent<SvgProps>;
  headingIconBg: string;
  ActionIcon: React.StatelessComponent<SvgProps>;
  actionIconBg: string;
  description: string;
  heading: string;
  onPress: () => void;
};

type ReportItemFC = (props: ReportItemProps) => JSX.Element;
