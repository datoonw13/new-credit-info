import AsyncStorage from '@react-native-community/async-storage';

/**
 * Get Access token.
 */
export const getAccessToken = () => AsyncStorage.getItem('accessToken');

/**
 * Set access token.
 */
export const setAccessToken = (accessToken: string) =>
  AsyncStorage.setItem('accessToken', accessToken);

/**
 * Remove access token.
 */
export const removeAccessToken = () => AsyncStorage.removeItem('accessToken');

/**
 * Get refresh token.
 */
export const getRefreshToken = () => AsyncStorage.getItem('refreshToken');

/**
 * Set refresh token.
 */
export const setRefreshToken = (refreshToken: string) =>
  AsyncStorage.setItem('refreshToken', refreshToken);

/**
 * Remove refresh token.
 */
export const removeRefreshToken = () => AsyncStorage.removeItem('refreshToken');

/**
 * Set user personal info.
 */
export const setPersonalInfo = (data: ProfileInfo) =>
  AsyncStorage.setItem('userData', JSON.stringify(data));

/**
 * Get user personal info.
 */
export const getPersonalInfo = async () => {
  const JSONData = await AsyncStorage.getItem('userData');

  if (JSONData) {
    return JSON.parse(JSONData) as ProfileInfo;
  }

  return null;
};

/**
 * Set biometrics auth status.
 */
export const activateBiometricsAuth = () =>
  AsyncStorage.setItem('biometric-auth-status', 'true');

/**
 * Set biometrics auth status.
 */
export const disableBiometricAuth = () =>
  AsyncStorage.removeItem('biometric-auth-status');

/**
 * Get biometrics auth status.
 */
export const getBiometricsAuthStatus = async () => {
  const biometricsStatus = await AsyncStorage.getItem('biometric-auth-status');
  return !!biometricsStatus;
};

/**
 * Remember user.
 */
export const rememberUser = (username: string) =>
  AsyncStorage.setItem('remember-me', username);

/**
 * Forget user.
 */
export const forgetUser = () => AsyncStorage.removeItem('remember-me');

/**
 * Get remembered user.
 */
export const getRememberedUser = () => AsyncStorage.getItem('remember-me');

/**
 * Set user passcode.
 */
export const setPasscode = (passcode: string) =>
  AsyncStorage.setItem('passcode', passcode);

/**
 * Get passcode.
 */
export const getPasscode = () => AsyncStorage.getItem('passcode');

/**
 * Remove passcode.
 */
export const removePasscode = () => AsyncStorage.removeItem('passcode');
