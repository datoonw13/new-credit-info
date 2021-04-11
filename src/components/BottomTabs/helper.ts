import {getCurrentRoute} from 'utils/navigation';
/**
 * Tab bar options.
 */
export const shouldHide = () => {
  const currentRoute = getCurrentRoute();
  return [
    'FAQ',
    'Privacy',
    'Security',
    'SetPasscode',
    'ChangePassword',
    'SetFingerprint',
    'UpdatePersonalData',
    'TermsAndConditions',
  ].has(currentRoute);
};
