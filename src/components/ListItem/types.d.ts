import {StatelessComponent} from 'react';
import {SvgProps} from 'react-native-svg';

type ListItemProps = {
  title: string;
  Icon: StatelessComponent<SvgProps>;
  color: string;
  onPress: null | (() => void);
  switcher?: boolean;
  onSwitch?: () => void;
  offSwitch: (() => void) | null;
  switchValue?: boolean;
};

type UseListItem = Omit<
  ListItemProps,
  'switcher' | 'title' | 'Icon' | 'color' | 'onPress' | 'switchValue'
>;

type ListItemFC = (props: ListItemProps) => JSX.Element;
