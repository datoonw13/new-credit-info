import {all, takeLatest} from 'redux-saga/effects';
import {checkSignedInSaga} from './mainSaga';
import {
  acceptAgreementSaga,
  checkOTPSaga,
  getCountriesSaga,
  getCustomerInfoSaga,
  logoutSaga,
  sendOTPSaga,
  setCustomerExtraSaga,
  signInSaga,
  signUpSaga,
  updatePasswordSaga,
} from './authSaga';
import {
  ACCEPT_AGREEMENT,
  CHECK_OTP,
  CHECK_SIGNED_IN,
  GET_COUNTRIES,
  GET_CUSTOMER_INFO,
  LOGOUT,
  REQUEST_SIGN_IN,
  REQUEST_SIGN_UP,
  SEND_OTP,
  SET_CUSTOMER_EXTRA,
  UPDATE_PASSWORD,
} from '../ducks/authDuck';

function* actionWatcher() {
  yield takeLatest(CHECK_SIGNED_IN, checkSignedInSaga);
  yield takeLatest(REQUEST_SIGN_IN, signInSaga);
  yield takeLatest(REQUEST_SIGN_UP, signUpSaga);
  yield takeLatest(UPDATE_PASSWORD, updatePasswordSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(GET_COUNTRIES, getCountriesSaga);
  yield takeLatest(SET_CUSTOMER_EXTRA, setCustomerExtraSaga);
  yield takeLatest(GET_CUSTOMER_INFO, getCustomerInfoSaga);
  yield takeLatest(ACCEPT_AGREEMENT, acceptAgreementSaga);
  yield takeLatest(SEND_OTP, sendOTPSaga);
  yield takeLatest(CHECK_OTP, checkOTPSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
