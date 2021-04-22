import {AuthStatus} from 'store/types';
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
export const setAuthStatusAction = (authStatus: AuthStatus) => ({
  type: actionTypes.CHECK_SIGNED_IN,
  authStatus,
});
