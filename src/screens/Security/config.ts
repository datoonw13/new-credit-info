import * as SVG from 'assets/svg';
import {colors} from 'theme';
import {goTo} from 'utils/navigation';

export const menuList = [
  {
    id: 1,
    Icon: SVG.Passcode,
    color: colors.strangeBlueOp2,
    title: 'security.signInWithPasscode',
    dividerWidth: '100%',
    switcher: true,
    onSwitch: () => goTo('AfterAuthMainStackNavigator', 'SetPasscode'),
    offSwitch: undefined,
    onPress: null,
  },
  {
    id: 2,
    Icon: SVG.Fingerprint,
    color: colors.crimsonOp1,
    title: 'security.signInWithFingerprint',
    dividerWidth: '100%',
    switcher: true,
    onSwitch: () => goTo('AfterAuthMainStackNavigator', 'SetFingerprint'),
    offSwitch: undefined,
    onPress: null,
  },
  {
    id: 3,
    Icon: SVG.ChangePassword,
    color: colors.strangeBlueOp1,
    title: 'security.changePassword',
    dividerWidth: '100%',
    switcher: false,
    onSwitch: undefined,
    offSwitch: undefined,
    onPress: null,
  },
  {
    id: 4,
    Icon: SVG.TwoFactorAuthorization,
    color: colors.strangeBlueOp1,
    title: 'security.twoFactorAuth',
    dividerWidth: '100%',
    switcher: true,
    onSwitch: undefined,
    offSwitch: undefined,
    onPress: null,
  },
];
