import axios from './axios';
import * as API from './api';

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
export const refreshAuth = () => {
  //
};
