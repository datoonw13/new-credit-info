import * as API from './api';
import axios from './axios';
import {global} from 'utils';

/**
 * Get available services for customers.
 */
export const getServices = (type: EntityType2) =>
  axios.get<any, Services>(API.getServices, {
    params: {
      language: global.lang.toUpperCase(),
      type: type,
    },
  });
