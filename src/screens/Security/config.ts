import * as SVG from 'assets/svg';
import {colors} from 'theme';

export const menuList = [
  {
    id: 0,
    Icon: SVG.Passcode,
    color: colors.strangeBlueOp2,
    title: 'security.signInWithPasscode',
    dividerWidth: '100%',
    switcher: true,
  },
  {
    id: 1,
    Icon: SVG.Fingerprint,
    color: colors.crimsonOp1,
    title: 'security.signInWithFingerprint',
    dividerWidth: '100%',
    switcher: true,
  },
  {
    id: 2,
    Icon: SVG.ChangePassword,
    color: colors.strangeBlueOp1,
    title: 'security.changePassword',
    dividerWidth: '100%',
    switcher: false,
  },
  {
    id: 3,
    Icon: SVG.TwoFactorAuthorization,
    color: colors.strangeBlueOp1,
    title: 'security.twoFactorAuth',
    dividerWidth: '100%',
    switcher: true,
  },
];
