import {StatelessComponent} from 'react';
import {SvgProps} from 'react-native-svg';

type ListItemProps = {
  title: string;
  Icon: StatelessComponent<SvgProps>;
  color: string;
  onPress: null | (() => void);
  switcher?: boolean;
};

type ListItemFC = (props: ListItemProps) => JSX.Element;
