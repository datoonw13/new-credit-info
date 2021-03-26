import {goTo} from 'utils/navigation';
import {getCredentials} from 'utils/keychain';

/**
 * Go to sign in with fingerprint screen
 * if there are credentials left in the key chain.
 */
export const goToSignInWithFingerprint = async () => {
  try {
    const credentials = await getCredentials();
    if (credentials) {
      goTo('MainStackBeforeAuthNavigator', 'SignInPass');
    }
  } catch (e) {}
};
