import * as colors from 'theme/colors';
import {Login, Service, FAQ, Privacy} from 'assets/svg';
import {goTo} from 'utils/navigation';

export const menuList = [
  {
    id: 1,
    title: 'login',
    color: colors.crimson,
    Icon: Login,
    dividerWidth: '100%',
    navigate: null,
  },
  {
    id: 2,
    title: 'service',
    color: colors.lightGreen,
    Icon: Service,
    dividerWidth: '80%',
    navigate: () => goTo('MainStackNavigator', 'Service'),
  },
  {
    id: 3,
    title: 'faq',
    color: colors.YELLOW,
    Icon: FAQ,
    dividerWidth: '80%',
    navigate: () => goTo('MainStackNavigator', 'FAQ'),
  },
  {
    id: 4,
    title: 'privacy',
    color: colors.blackOp1,
    Icon: Privacy,
    dividerWidth: '100%',
    navigate: () => goTo('MainStackNavigator', 'Privacy'),
  },
];
