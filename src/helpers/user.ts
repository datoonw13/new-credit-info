import AsyncStorage from '@react-native-community/async-storage';
import {getPersonalInfo} from 'utils/storage';
import {clearCredentials} from 'utils/keychain';

/**
 * Determine if user status is registered.
 */
export const isBeingRegistered = ({status}: DecodedJWT) =>
  status === 'REGISTERED';

/**
 * Determine if user should make transactions
 * after registration...
 */
export const shouldMakeTransaction = ({status}: DecodedJWT) =>
  status === 'VERIFIED';

/**
 * Determine if user should choose service.
 */
export const shouldSeeReports = ({status, productId}: DecodedJWT) => {
  return status === 'AUTHORIZED' && ![1, 2, 3, 4].has(productId);
};

/**
 * Determine if user should see tab navigation.
 */
export const shouldTabNavigation = ({status, productId}: DecodedJWT) => {
  return status === 'AUTHORIZED' && [1, 2, 3, 4].has(productId);
};

/**
 * Clean keychain and storage if previously
 * authenticated user is different
 * than existing one.
 */
export const cleanPreviousUserDataIfDifferent = async (username: string) => {
  const personalInfo = await getPersonalInfo();

  if (personalInfo?.personalCode !== username) {
    await AsyncStorage.removeItem('biometric-auth-status');
    await AsyncStorage.removeItem('passcode');
    await AsyncStorage.removeItem('authData');
    await AsyncStorage.removeItem('userData');
    await clearCredentials();
  }
};
