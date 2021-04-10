import axios from './axios';
import * as API from './api';
import {global} from 'utils';
/**
 * Get user agreement.
 */
export const getUserAgreement = () =>
  axios.get<any, UserAgreement>(API.userAgreement, {
    params: {
      language: global.lang.toUpperCase(),
    },
  });
