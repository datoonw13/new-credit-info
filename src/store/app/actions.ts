import * as actionTypes from './actionTypes';

/**
 * Reset store.
 */
export const resetStoreAction = () => ({
  type: actionTypes.RESET_STORE,
});

/**
 * Save user auth status.
 */
export const setAuthStatusAction = (isSignedIn: boolean) => ({
  type: actionTypes.CHECK_SIGNED_IN,
  isSignedIn,
});
