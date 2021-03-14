import * as actionTypes from './actionTypes';

/**
 * Refresh authorization state.
 */
export const refreshAuth = () => ({
  type: actionTypes.AUTH_REFRESH,
});
