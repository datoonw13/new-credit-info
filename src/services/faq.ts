import axios from './axios';
import * as API from './api';
import {global} from 'utils';

/**
 * Get FAQ.
 */
export const FAQ = () =>
  axios.get(API.FAQ, {
    params: {
      language: global.lang.toUpperCase(),
    },
  });
