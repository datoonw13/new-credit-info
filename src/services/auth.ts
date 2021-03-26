import axios from './axios';
import * as API from './api';
import {getRefreshToken} from 'utils/storage';

/**
 * Auth service.
 */
export const auth = ({username, password}: AuthRequest) =>
  axios.post<AuthRequest, AuthResponse>(API.auth, {
    username,
    password,
  });

/**
 * Refresh auth state.
 */
export const refreshAuth = async () => {
  const token = await getRefreshToken();

  return axios.post<any, AuthResponse>(API.authRefresh, {
    token,
  });
};
