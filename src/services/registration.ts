import axios from './axios';
import * as API from './api';
import {global} from 'utils';

/**
 * Get user data.
 */
export const customerInfo = (step?: number) =>
  axios.get<any, CustomerInfoResponse>(API.customerInfo, {
    params: {
      language: global.lang.toUpperCase(),
      step,
    },
  });

/**
 * Register user.
 */
export const register = ({
  customerType,
  userName,
  firstName,
  lastName,
  password,
}: RegisterRequest) =>
  axios.post<RegisterRequest>(
    API.register,
    {
      customerType,
      userName,
      firstName,
      lastName,
      password,
    },
    {
      params: {
        language: global.lang.toUpperCase(),
      },
    },
  );

/**
 * Set additional user information.
 */
export const setAdditionalUserInfo = ({
  birthDate,
  countryId,
  address,
  email,
}: SetAdditionalUserInfoRequest) =>
  axios.put<SetAdditionalUserInfoRequest>(API.setAdditionalUserInfo, {
    birthDate,
    countryId,
    address,
    email,
  });

/**
 * Get terms and conditions.
 */
export const getCustomerAgreement = () =>
  axios.get<any, Agreement>(API.getCustomerAgreement, {
    params: {
      language: global.lang.toUpperCase(),
    },
  });

/**
 * Agree to terms and conditions request to back-end.
 */
export const saveCustomerAgreement = () =>
  axios.patch(API.saveCustomerAgreement);

/**
 * Send one time password to user.
 */
export const SendOTP = (phone: string) =>
  axios.put(
    API.sendOTP,
    {},
    {
      params: {
        phone,
      },
    },
  );

/**
 * Verify one time password.
 */
export const verifyOTP = (code: string) =>
  axios.put(API.verifyOTP, {
    code,
  });

/**
 * Get countries.
 */
export const getCountries = () =>
  axios.get<any, Country[]>(API.getCountries, {
    params: {
      language: global.lang.toUpperCase(),
    },
  });
