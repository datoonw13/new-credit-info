import {colors} from 'theme';
import {
  FAQ,
  Privacy,
  PersonalInfo,
  Security,
  TermsAndConditions,
} from 'assets/svg';
import {goTo} from 'utils/navigation';

export const menuList = [
  {
    id: 1,
    title: 'personalInfo.title',
    color: colors.strangeBlueOp1,
    Icon: PersonalInfo,
    dividerWidth: '85%',
    onPress: () => goTo('AfterAuthMainStackNavigator', 'UpdatePersonalData'),
  },
  {
    id: 2,
    title: 'security.title',
    color: colors.strangeBlueOp2,
    Icon: Security,
    dividerWidth: '85%',
    onPress: () => goTo('AfterAuthMainStackNavigator', 'Security'),
  },
  {
    id: 3,
    title: 'privacy',
    color: colors.blackOp1,
    Icon: Privacy,
    dividerWidth: '85%',
    onPress: () => goTo('AfterAuthMainStackNavigator', 'Privacy'),
  },
  {
    id: 4,
    title: 'termsAndConditions.title',
    color: colors.greenOp1,
    Icon: TermsAndConditions,
    dividerWidth: '85%',
    onPress: () => {},
  },
  {
    id: 5,
    title: 'faq',
    color: colors.yellowOp1,
    Icon: FAQ,
    dividerWidth: null,
    onPress: () => goTo('AfterAuthMainStackNavigator', 'FAQ'),
  },
];
