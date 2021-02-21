import axios from 'axios';
import {BackHandler} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {alertError} from 'utils/dropdownAlert';
import {startLoading, stopLoading} from 'utils/loader';
import {domain} from 'utils/config';
import {getStore} from 'utils/redux';
import {resetStoreAction} from 'store/app/actions';
import {getCurrentRoute} from 'utils/navigation';

let canNotPressBackButton = false;
let counter = 0;
const onBackButtonPressAndroid = () => {
  return canNotPressBackButton;
};
BackHandler.addEventListener('hardwareBackPress', onBackButtonPressAndroid);

const axiosInstance = axios.create({
  baseURL: `${domain}`,
});

axiosInstance.interceptors.request.use(
  async (request) => {
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
  (error) => {
    canNotPressBackButton = false;
    stopLoading();
    return Promise.reject({...error});
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return onResponseFulfilled(response);
  },
  (error) => {
    return onResponseRejected(error);
  },
);

const onResponseFulfilled = (response: any) => {
  canNotPressBackButton = false;
  if (--counter < 1) {
    stopLoading();
  }
  return response.data;
};

const onResponseRejected = (error: any) => {
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
  return Promise.reject({...error});
};

export default axiosInstance;
