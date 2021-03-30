import {goTo} from 'utils/navigation';
import {getCredentials} from 'utils/keychain';
import {getPasscode, getBiometricsAuthStatus} from 'utils/storage';

/**
 * Go to sign in with fingerprint screen
 * if there are credentials left in the key chain.
 */
export const goToSignInWithFingerprint = async () => {
  try {
    const canGo = await canGoToSignInPass();
    if (canGo) {
      goTo('MainStackBeforeAuthNavigator', 'SignInPass');
    }
  } catch (e) {}
};

/**
 * Determine if user has passcode
 * or fingerprint activated.
 */
export const canGoToSignInPass = async () => {
  const hasCredentials = await getCredentials();
  if (!hasCredentials) {
    return false;
  }

  const passcodeAvailable = await getPasscode();
  const biometricsStatus = await getBiometricsAuthStatus();

  return !!passcodeAvailable || biometricsStatus;
};
