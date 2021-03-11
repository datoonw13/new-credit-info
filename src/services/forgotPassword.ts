import axios from './axios';
import * as API from './api';

/**
 * Send one time password during forgot password.
 */
export const forgotPasswordSendOTP = (username: string) =>
  axios.post(API.forgotPasswordSendOTP, {
    username,
  });
