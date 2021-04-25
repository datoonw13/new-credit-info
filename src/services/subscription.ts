import * as API from './api';
import axios from './axios';
import {global} from 'utils';

/**
 * Get subscription services.
 */
export const getSubscriptionServices = () =>
  axios.get<any, Services>(API.subscriptionServices, {
    params: {
      language: global.lang.toUpperCase(),
    },
  });
