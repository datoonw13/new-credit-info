import {put, takeLatest} from 'redux-saga/effects';
import axiosInstance from 'services/interceptorService';
import AsyncStorage from '@react-native-community/async-storage';
import {
  setRegisterDataAction,
  setRegisterLastStepAction,
  setRegisterSelectedStepAction,
  updateRegisterDataAction,
  setCountriesAction,
} from 'store/registration/actions';
import {resetStoreAction, setAuthStatusAction} from 'store/app/actions';
import * as actionTypes from 'store/registration/actionTypes';
import jwtDecode from 'jwt-decode';
import {global} from 'utils';
import {goTo} from 'utils/navigation';
import {alertError, alertSuccess} from 'utils/dropdownAlert';

/**
 * Saga for user sign in.
 * Also determine if user is being registered,
 * and if so set proper data into the state.
 */
function* signInSaga({data}: any) {
  try {
    const res = yield axiosInstance.post('auth', data);
    yield AsyncStorage.setItem('accessToken', res.accessToken);
    yield AsyncStorage.setItem('refreshToken', res.refreshToken);
    const jwtData = jwtDecode<any>(res.accessToken);
    if (jwtData.status === 'REGISTERED') {
      const userInfo = yield axiosInstance.get(
        'customer/info?language=' + global.lang.toUpperCase(),
      );
      yield put(
        setRegisterDataAction({
          ...userInfo,
          customerType: jwtData.customerType,
        }),
      );
      if (userInfo.userName) {
        yield put(setRegisterLastStepAction(3));
        yield put(setRegisterSelectedStepAction(3));
      } else if (userInfo.birthDate) {
        yield put(setRegisterLastStepAction(4));
        yield put(setRegisterSelectedStepAction(4));
      } else {
        yield put(setRegisterLastStepAction(5));
        yield put(setRegisterSelectedStepAction(5));
      }
      goTo('MainStackNavigator', 'Register');
    } else {
      yield put(setAuthStatusAction(true));
    }
  } catch (error) {
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

/**
 * Saga for signing user up.
 * also user is created but additional info
 * is not yet set, so we move user to the
 * registration step concerning his birth date,
 * country, phone number and so on...
 */
function* signUpSaga(payload: any) {
  try {
    yield axiosInstance.post(
      'register?language=' + global.lang.toUpperCase(),
      payload.data,
    );
    const res = yield axiosInstance.post('auth', {
      username: payload.data.userName,
      password: payload.data.password,
    });
    yield AsyncStorage.setItem('accessToken', res.accessToken);
    yield AsyncStorage.setItem('refreshToken', res.refreshToken);
    yield put(updateRegisterDataAction(payload.data));
    yield put(setRegisterLastStepAction(4));
    yield put(setRegisterSelectedStepAction(4));
    yield alertSuccess('success', 'registration.userCreateSuccess');
  } catch (error) {
    console.log(error);
    if (error.response.status === 409) {
      yield alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

/**
 * Get user info from back-end.
 */
function* getCustomerInfoSaga(payload: any) {
  try {
    const query = payload.step !== null ? '&step=' + payload.step : '';
    const userInfo = yield axiosInstance.get(
      'customer/info?language=' + global.lang.toUpperCase() + query,
    );
    yield put(updateRegisterDataAction(userInfo));
  } catch (error) {
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

/**
 * Saga for saving users additional data.
 */
function* setCustomerExtraSaga(payload: any) {
  try {
    yield axiosInstance.put('customer/extra', payload.data);
    yield put(updateRegisterDataAction(payload.data));
    yield put(setRegisterLastStepAction(5));
    yield put(setRegisterSelectedStepAction(5));
  } catch (error) {
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

/**
 * Saga for setting up agreement to the
 * terms and policies.
 */
function* acceptAgreementSaga() {
  try {
    yield axiosInstance.patch('customer/agreement');
    yield put(updateRegisterDataAction({agreement: true}));
    yield put(setRegisterLastStepAction(6));
    yield put(setRegisterSelectedStepAction(6));
  } catch (error) {
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

/**
 * Saga for sending one-time-password
 * to the user.
 */
function* sendOTPSaga(payload: any) {
  try {
    yield axiosInstance.put('customer/sendotp?phone=' + payload.phone);
    yield put(updateRegisterDataAction({phone: payload.phone}));
    alertSuccess('success', 'SEND_OTP_SUCCESS');
  } catch (error) {
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

/**
 * Saga for verification one-time-password.
 */
function* checkOTPSaga(payload: any) {
  try {
    yield axiosInstance.put('customer/checkotp', {code: payload.code});
    alertSuccess('success', 'dropdownAlert.registerSuccess');
  } catch (error) {
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

/**
 * Saga for updating user password.
 */
function* updatePasswordSaga(payload: any) {
  try {
    yield axiosInstance.patch('auth/updatePassword', payload.data);
    alertSuccess('success', 'Password Changed Successfully');
  } catch (error) {
    alertError('error', error.response.data.errorCode);
  }
}

/**
 * Log out saga.
 */
function* logoutSaga() {
  try {
    yield axiosInstance.delete('auth/signOut');
    yield AsyncStorage.removeItem('token');
    yield put(resetStoreAction());
  } catch (error) {
    alertError('error');
  }
}

/**
 * Saga for getting countries from the back-end
 * and saving results into the state.
 */
function* getCountriesSaga() {
  try {
    const countries = yield axiosInstance.get(
      'country?language=' + global.lang.toUpperCase(),
    );
    yield put(setCountriesAction(countries));
  } catch (error) {
    alertError('error');
  }
}

/**
 * Register all the sagas with the actions.
 */
function* registrationSagas() {
  yield takeLatest(actionTypes.REQUEST_SIGN_IN, signInSaga);
  yield takeLatest(actionTypes.REQUEST_SIGN_UP, signUpSaga);
  yield takeLatest(actionTypes.UPDATE_PASSWORD, updatePasswordSaga);
  yield takeLatest(actionTypes.LOGOUT, logoutSaga);
  yield takeLatest(actionTypes.GET_COUNTRIES, getCountriesSaga);
  yield takeLatest(actionTypes.SET_CUSTOMER_EXTRA, setCustomerExtraSaga);
  yield takeLatest(actionTypes.GET_CUSTOMER_INFO, getCustomerInfoSaga);
  yield takeLatest(actionTypes.ACCEPT_AGREEMENT, acceptAgreementSaga);
  yield takeLatest(actionTypes.SEND_OTP, sendOTPSaga);
  yield takeLatest(actionTypes.CHECK_OTP, checkOTPSaga);
}

export default registrationSagas;
