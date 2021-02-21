import * as actionTypes from './actionTypes';

/**
 * Check if user is authenticated.
 */
export const checkSignedInAction = () => ({
  type: actionTypes.CHECK_SIGNED_IN,
});

export const signInAction = (data: any) => ({
  type: actionTypes.REQUEST_SIGN_IN,
  data,
});

export const signUpAction = (data: any) => ({
  type: actionTypes.REQUEST_SIGN_UP,
  data,
});

export const setCustomerExtraAction = (data: any) => ({
  type: actionTypes.SET_CUSTOMER_EXTRA,
  data,
});

export const getCountriesAction = () => ({
  type: actionTypes.GET_COUNTRIES,
});

export const getCostumerInfoAction = (step: any) => ({
  type: actionTypes.GET_CUSTOMER_INFO,
  step,
});

export const acceptAgreementAction = () => ({
  type: actionTypes.ACCEPT_AGREEMENT,
});

export const sendOTPAction = (phone: any) => ({
  type: actionTypes.SEND_OTP,
  phone,
});

export const checkOTPAction = (code: any) => ({
  type: actionTypes.CHECK_OTP,
  code,
});
