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

export const updateProfileImage = (data: FormData) =>
  axios.put(API.updateProfile, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    params: {
      language: global.lang.toUpperCase(),
    },
  });
