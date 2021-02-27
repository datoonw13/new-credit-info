import axios from 'axios';
import {BackHandler} from 'react-native';
import {domain} from 'utils/config';
import {
  onBackButtonPressAndroid,
  responseMiddleware,
  requestMiddleware,
} from './helpers';

BackHandler.addEventListener('hardwareBackPress', onBackButtonPressAndroid);

const axiosInstance = axios.create({
  baseURL: `${domain}`,
});

axiosInstance.interceptors.request.use(
  requestMiddleware.onFulfilled,
  requestMiddleware.onRejected,
);

axiosInstance.interceptors.response.use(
  responseMiddleware.onFulfilled,
  responseMiddleware.onRejected,
);

export default axiosInstance;
