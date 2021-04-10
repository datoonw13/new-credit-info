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
    'SetFingerprint',
    'UpdatePersonalData',
    'TermsAndConditions',
  ].has(currentRoute);
};
