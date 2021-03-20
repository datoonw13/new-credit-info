import KeyChain from 'react-native-keychain';

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
