import {StatelessComponent} from 'react';
import {SvgProps} from 'react-native-svg';

type ListItemProps = {
  title: string;
  Icon: StatelessComponent<SvgProps>;
  color: string;
  onPress: null | (() => void);
  switcher?: boolean;
  onSwitch?: () => void;
  offSwitch?: () => void;
};

type UseListItem = Omit<
  ListItemProps,
  'switcher' | 'title' | 'Icon' | 'color' | 'onPress'
>;

type ListItemFC = (props: ListItemProps) => JSX.Element;
