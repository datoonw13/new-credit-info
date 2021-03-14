import * as actionTypes from './actionTypes';

/**
 * Sign in action.
 * If user is being registered,
 * make him continue registration process.
 */
export const signIn = (data: any) => ({
  type: actionTypes.REQUEST_SIGN_IN,
  data,
});

/**
 * Sign out saga.
 */
export const signOut = () => ({
  type: actionTypes.SIGN_OUT,
});

/**
 * Refresh authorization state.
 */
export const refreshAuth = () => ({
  type: actionTypes.AUTH_REFRESH,
});

/**
 * Check if user is authenticated.
 */
export const checkSignedIn = () => ({
  type: actionTypes.CHECK_SIGNED_IN,
});
