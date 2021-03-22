import {colors} from 'theme';
import {Login, Service, FAQ, Privacy} from 'assets/svg';
import {goTo} from 'utils/navigation';

export const menuList = [
  {
    id: 1,
    title: 'login',
    color: colors.crimsonOp2,
    Icon: Login,
    dividerWidth: '100%',
    navigate: () => goTo('MainStackBeforeAuthNavigator', 'Auth'),
  },
  {
    id: 2,
    title: 'service',
    color: colors.secondGreenOp1,
    Icon: Service,
    dividerWidth: '80%',
    navigate: () => goTo('MainStackBeforeAuthNavigator', 'Service'),
  },
  {
    id: 3,
    title: 'faq',
    color: colors.yellowOp1,
    Icon: FAQ,
    dividerWidth: '80%',
    navigate: () => goTo('MainStackBeforeAuthNavigator', 'FAQ'),
  },
  {
    id: 4,
    title: 'privacy',
    color: colors.blackOp1,
    Icon: Privacy,
    dividerWidth: '100%',
    navigate: () => goTo('MainStackBeforeAuthNavigator', 'Privacy'),
  },
];
