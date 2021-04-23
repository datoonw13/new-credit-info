import {put, takeLatest} from 'redux-saga/effects';
import * as registerActions from 'store/registration/actions';
import * as authActions from 'store/auth/actions';
import * as actionTypes from 'store/registration/actionTypes';
import {alertError, alertSuccess, alertWarning} from 'utils/dropdownAlert';
import * as services from 'services';
import {showSentOTPModal} from 'utils/modal';
import {setAccessToken, setRefreshToken} from 'utils/storage';

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

    const {accessToken, refreshToken}: AuthResponse = yield services.auth({
      username: payload.data.userName,
      password: payload.data.password,
    });

    yield setAccessToken(accessToken);
    yield setRefreshToken(refreshToken);

    yield put(registerActions.updateRegisterDataAction(payload.data));
    yield put(registerActions.setRegisterLastStepAction(4));
    yield put(registerActions.setRegisterSelectedStepAction(4));
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
    yield put(registerActions.updateRegisterDataAction(userInfo));
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
    yield put(registerActions.updateRegisterDataAction(payload.data));
    yield put(registerActions.setRegisterLastStepAction(5));
    yield put(registerActions.setRegisterSelectedStepAction(5));
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
    yield put(registerActions.updateRegisterDataAction({agreement: true}));
    yield put(registerActions.setRegisterLastStepAction(6));
    yield put(registerActions.setRegisterSelectedStepAction(6));
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
    yield put(registerActions.updateRegisterDataAction({phone: payload.phone}));
    showSentOTPModal();
  } catch (error) {
    console.dir(error);
    if (error.response.status === 409) {
      alertWarning('', 'registration.phoneAlreadyUsed');
    }
  }
}

/**
 * Saga for verification one-time-password.
 */
function* verifyOTPSaga(payload: any) {
  try {
    yield services.verifyOTP(payload.code);
    yield put(authActions.setAuthStatusAction('SHOULD_PAY'));
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
    const countries: Country[] = yield services.getCountries();
    yield put(registerActions.setCountriesAction(countries));
  } catch (error) {
    alertError('error');
  }
}

/**
 * Register all the sagas with the actions.
 */
function* registrationSagas() {
  yield takeLatest(actionTypes.REQUEST_SIGN_UP, signUpSaga);
  yield takeLatest(actionTypes.GET_COUNTRIES, getCountriesSaga);
  yield takeLatest(actionTypes.SET_CUSTOMER_EXTRA, setCustomerExtraSaga);
  yield takeLatest(actionTypes.GET_CUSTOMER_INFO, getCustomerInfoSaga);
  yield takeLatest(actionTypes.ACCEPT_AGREEMENT, acceptAgreementSaga);
  yield takeLatest(actionTypes.SEND_OTP, sendOTPSaga);
  yield takeLatest(actionTypes.CHECK_OTP, verifyOTPSaga);
}

export default registrationSagas;
