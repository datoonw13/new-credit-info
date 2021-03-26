import * as actionTypes from './actionTypes';

/**
 * Reset store.
 */
export const resetStoreAction = () => ({
  type: actionTypes.RESET_STORE,
});

/**
 * Set user data.
 */
export const setUserDataAction = (data: ProfileInfo) => ({
  type: actionTypes.SET_USER_DATA,
  data,
});

/**
 * Save user auth status.
 */
export const setAuthStatusAction = (isSignedIn: boolean) => ({
  type: actionTypes.CHECK_SIGNED_IN,
  isSignedIn,
});
