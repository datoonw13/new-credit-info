import * as actionTypes from './actionTypes';

/**
 * Check if user is authenticated.
 */
export const checkSignedIn = () => ({
  type: actionTypes.CHECK_SIGNED_IN,
});

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
 * Sign up action.
 * Without user's additional info.
 */
export const signUp = (data: any) => ({
  type: actionTypes.REQUEST_SIGN_UP,
  data,
});

/**
 * Set users additional info during registration.
 */
export const setCustomerExtra = (data: any) => ({
  type: actionTypes.SET_CUSTOMER_EXTRA,
  data,
});

/**
 * Get countries from the back-end and
 * save them into the state.
 */
export const getCountries = () => ({
  type: actionTypes.GET_COUNTRIES,
});

/**
 * Get user information.
 */
export const getCostumerInfo = (step: any) => ({
  type: actionTypes.GET_CUSTOMER_INFO,
  step,
});

/**
 * Accept agreement request action to the back-end.
 */
export const acceptAgreement = () => ({
  type: actionTypes.ACCEPT_AGREEMENT,
});

/**
 * Send one time password to the user.
 */
export const sendOTP = (phone: any) => ({
  type: actionTypes.SEND_OTP,
  phone,
});

/**
 * Verify one time password.
 */
export const checkOTP = (code: any) => ({
  type: actionTypes.CHECK_OTP,
  code,
});
