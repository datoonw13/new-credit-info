import axios from './axios';
import * as API from './api';

/**
 * Send one time password during forgot password.
 */
export const forgotPasswordSendOTP = (username: string) =>
  axios.post(API.forgotPasswordSendOTP, {
    username,
  });

/**
 * Check one time password validity.
 */
export const forgotPasswordCheckOTP = (username: string, code: string) =>
  axios.post(API.forgotPasswordCheckOTP, {
    username,
    code,
  });

/**
 * Change password.
 */
export const forgotPasswordRest = (username: string, password: string) =>
  axios.patch(API.forgotPasswordReset, {
    username,
    password,
  });
