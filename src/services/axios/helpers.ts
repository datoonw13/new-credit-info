import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {alertError} from 'utils/dropdownAlert';
import {startLoading, stopLoading} from 'utils/loader';
import AsyncStorage from '@react-native-community/async-storage';
import {resetStoreAction} from 'store/app/actions';
import {getCurrentRoute} from 'utils/navigation';
import {getStore} from 'utils/redux';

let canNotPressBackButton = false;
let counter = 0;

/**
 * Disable android back button on requests.
 */
export const onBackButtonPressAndroid = () => {
  return canNotPressBackButton;
};

/**
 * Request middleware.
 */
export const requestMiddleware = {
  onFulfilled: async (request: AxiosRequestConfig) => {
    console.groupCollapsed(`Request - ${request.url}`);
    console.log(request);
    console.groupEnd();

    canNotPressBackButton = true;
    if (++counter < 2) {
      startLoading();
    }
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }
    return request;
  },
  onRejected: (error: any) => {
    canNotPressBackButton = false;
    stopLoading();
    return Promise.reject(error);
  },
};

/**
 * Response middleware.
 */
export const responseMiddleware = {
  onFulfilled: (response: AxiosResponse<any>) => {
    canNotPressBackButton = false;
    if (--counter < 1) {
      stopLoading();
    }
    return response.data;
  },
  onRejected: (error: any) => {
    canNotPressBackButton = false;
    if (--counter < 1) {
      stopLoading();
    }
    if (error.response.status === 408 || error.response.status === 504) {
      alertError('შეცდომა #' + error.response.status, 'რექვესთს ვადა გაუვიდა');
    } else if (error.response.status === 404 || error.response.status === 504) {
      alertError('error', 'Not Found');
    } else if (error.response.status === 500) {
      alertError('error', 'Internal Server Error');
    }
    if (
      error.response.status === 401 ||
      error.response.status === 404 ||
      error.response.status === 403
    ) {
      if (getCurrentRoute() !== 'Ping') {
        AsyncStorage.setItem('authData', '');
        getStore()?.dispatch(resetStoreAction());
      }
    }
    return Promise.reject(error);
  },
};
