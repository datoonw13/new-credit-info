import KeyChain from 'react-native-keychain';
import {Credentials} from 'types/global';

/**
 * Get username and password from key chain.
 */
export const getCredentials = () => KeyChain.getGenericPassword();

/**
 * Set username and password into the key chain.
 */
export const setCredentials = ({username, password}: Credentials) =>
  KeyChain.setGenericPassword(username, password);

/**
 * Clear credentials.
 */
export const clearCredentials = () => KeyChain.resetGenericPassword();

/**
 * Set password.
 */
export const ifCredentialsSetPassword = async (password: string) => {
  const user = await KeyChain.getGenericPassword();
  if (user) {
    const {username} = user;
    KeyChain.setGenericPassword(username, password);
  }
};
