import axios from './axios';
import * as API from './api';
import {global} from 'utils';

/**
 * Get FAQ.
 */
export const getFAQs = (id: number) =>
  axios.get<any, FAQ[]>(API.FAQ, {
    params: {
      language: global.lang.toUpperCase(),
      categoryId: id,
    },
  });

/**
 * Get FAQ categories.
 */
export const getFAQCategories = () =>
  axios.get<any, FAQCategory[]>(API.FAQCategories, {
    params: {
      language: global.lang.toUpperCase(),
    },
  });
