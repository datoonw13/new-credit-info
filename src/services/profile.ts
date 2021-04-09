import axios from './axios';
import * as API from './api';
import {global} from 'utils';

/**
 * Get profile info.
 */
export const getProfileInfo = () =>
  axios.get<any, ProfileInfo>(API.profileInfo, {
    params: {
      language: global.lang.toUpperCase(),
    },
  });

/**
 * Update profile image.
 */
export const updateProfileImage = (data: FormData) =>
  axios.put(API.updateProfile, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    params: {
      language: global.lang.toUpperCase(),
    },
  });

/**
 * Update profile data(partial).
 */
export const updateProfileData = (data: UpdateProfile) =>
  axios.put(API.updateProfile, data, {
    params: {
      language: global.lang.toUpperCase(),
    },
  });

/**
 * Send email verification code.
 */
export const sendEmailVerificationCode = (email: string) =>
  axios.put(
    API.sendEmailOTP,
    {},
    {
      params: {
        email,
      },
    },
  );

/**
 * Verify email.
 */
export const verifyEmail = (code: string) =>
  axios.put(API.verifyEmail, {
    code,
  });

/**
 * Send phone verification code.
 */
export const sendPhoneVerificationCode = (phone: string) =>
  axios.put(
    API.sendPhoneOTP,
    {},
    {
      params: {
        phone,
      },
    },
  );

/**
 * Verify phone.
 */
export const verifyPhone = (code: string) =>
  axios.put(API.verifyPhone, {
    code,
  });
