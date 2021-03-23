import {StatelessComponent} from 'react';
import {SvgProps} from 'react-native-svg';

type BottomTabItemProps = {
  BottomTabActiveIcon: StatelessComponent<SvgProps>;
  BottomTabInactiveIcon: StatelessComponent<SvgProps>;
  screen: string;
  navigate: () => void;
};

type BottomTabItemFC = (props: BottomTabItemProps) => JSX.Element;
