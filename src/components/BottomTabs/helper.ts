import {getCurrentRoute} from 'utils/navigation';
/**
 * Tab bar options.
 */
export const shouldHide = () => {
  const currentRoute = getCurrentRoute();
  return ['Security', 'FAQ', 'Privacy', 'SetPasscode', 'SetFingerprint'].has(
    currentRoute,
  );
};
