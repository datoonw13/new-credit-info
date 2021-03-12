import {put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {
  setRegisterSelectedStepAction,
  setRegisterLastStepAction,
  updateRegisterDataAction,
  setRegisterDataAction,
  setCountriesAction,
} from 'store/registration/actions';
import {setAuthStatusAction} from 'store/app/actions';
import * as actionTypes from 'store/registration/actionTypes';
import jwtDecode from 'jwt-decode';
import {goTo} from 'utils/navigation';
import {alertError, alertSuccess} from 'utils/dropdownAlert';
import * as services from 'services/registration';
import {showSentOTPModal} from 'utils/modal';

/**
 * Saga for user sign in.
 * Also determine if user is being registered,
 * and if so set proper data into the state.
 */
function* signInSaga({data}: any) {
  try {
    const {accessToken, refreshToken}: AuthResponse = yield services.auth(data);
    yield AsyncStorage.setItem('accessToken', accessToken);
    yield AsyncStorage.setItem('refreshToken', refreshToken);
    const jwtData = jwtDecode<any>(accessToken);
    if (jwtData.status === 'REGISTERED') {
      const userInfo: CustomerInfoResponse = yield services.customerInfo();
      yield put(
        setRegisterDataAction({
          ...userInfo,
          customerType: jwtData.customerType,
        }),
      );
      if (userInfo.userName) {
        yield put(setRegisterLastStepAction(4));
        yield put(setRegisterSelectedStepAction(4));
      } else if (userInfo.birthDate) {
        yield put(setRegisterLastStepAction(5));
        yield put(setRegisterSelectedStepAction(5));
      } else {
        yield put(setRegisterLastStepAction(6));
        yield put(setRegisterSelectedStepAction(6));
      }
      goTo('MainStackNavigator', 'Register');
    } else {
      yield put(setAuthStatusAction(true));
    }
  } catch (error) {
    console.dir(error);
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
    const registerResult = yield services.register(payload.data);
    console.log({registerResult});

    const res: AuthResponse = yield services.auth({
      username: payload.data.userName,
      password: payload.data.password,
    });

    yield AsyncStorage.setItem('accessToken', res.accessToken);
    yield AsyncStorage.setItem('refreshToken', res.refreshToken);
    yield put(updateRegisterDataAction(payload.data));
    yield put(setRegisterLastStepAction(4));
    yield put(setRegisterSelectedStepAction(4));
    yield alertSuccess('success', 'dropdownAlert.userCreateSuccess');
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
    const userInfo: CustomerInfoResponse = yield services.customerInfo(
      payload.step,
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
    yield services.setAdditionalUserInfo(payload.data);
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
    yield services.saveCustomerAgreement();
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
    console.log({phone: payload.phone});
    yield services.SendOTP(payload.phone);
    yield put(updateRegisterDataAction({phone: payload.phone}));
    showSentOTPModal();
  } catch (error) {
    console.dir(error);
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

/**
 * Saga for verification one-time-password.
 */
function* verifyOTPSaga(payload: any) {
  try {
    yield services.verifyOTP(payload.code);
    alertSuccess('success', 'dropdownAlert.registerSuccess');
  } catch (error) {
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

/**
 * Saga for getting countries from the back-end
 * and saving results into the state.
 */
function* getCountriesSaga() {
  try {
    const countries = yield services.getCountries();
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
  yield takeLatest(actionTypes.GET_COUNTRIES, getCountriesSaga);
  yield takeLatest(actionTypes.SET_CUSTOMER_EXTRA, setCustomerExtraSaga);
  yield takeLatest(actionTypes.GET_CUSTOMER_INFO, getCustomerInfoSaga);
  yield takeLatest(actionTypes.ACCEPT_AGREEMENT, acceptAgreementSaga);
  yield takeLatest(actionTypes.SEND_OTP, sendOTPSaga);
  yield takeLatest(actionTypes.CHECK_OTP, verifyOTPSaga);
}

export default registrationSagas;
