import {StatelessComponent} from 'react';
import {SvgProps} from 'react-native-svg';

type DrawerListItemProps = {
  title: string;
  Icon: StatelessComponent<SvgProps>;
  color: string;
  navigate: null | (() => void);
};

type DrawerListItemFC = (props: DrawerListItemProps) => JSX.Element;
