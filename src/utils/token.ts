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
 * Set refresh token.
 */
export const setRefreshToken = (refreshToken: string) =>
  AsyncStorage.setItem('refreshToken', refreshToken);
