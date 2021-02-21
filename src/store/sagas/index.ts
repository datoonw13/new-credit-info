import {all, takeLatest} from 'redux-saga/effects';
import {checkSignedInSaga} from './mainSaga';
import * as authSagas from './authSaga';
import * as registrationActionTypes from 'store/registration/actionTypes';

function* actionWatcher() {
  yield takeLatest(registrationActionTypes.CHECK_SIGNED_IN, checkSignedInSaga);
  yield takeLatest(
    registrationActionTypes.REQUEST_SIGN_IN,
    authSagas.signInSaga,
  );
  yield takeLatest(
    registrationActionTypes.REQUEST_SIGN_UP,
    authSagas.signUpSaga,
  );
  yield takeLatest(
    registrationActionTypes.UPDATE_PASSWORD,
    authSagas.updatePasswordSaga,
  );
  yield takeLatest(registrationActionTypes.LOGOUT, authSagas.logoutSaga);
  yield takeLatest(
    registrationActionTypes.GET_COUNTRIES,
    authSagas.getCountriesSaga,
  );
  yield takeLatest(
    registrationActionTypes.SET_CUSTOMER_EXTRA,
    authSagas.setCustomerExtraSaga,
  );
  yield takeLatest(
    registrationActionTypes.GET_CUSTOMER_INFO,
    authSagas.getCustomerInfoSaga,
  );
  yield takeLatest(
    registrationActionTypes.ACCEPT_AGREEMENT,
    authSagas.acceptAgreementSaga,
  );
  yield takeLatest(registrationActionTypes.SEND_OTP, authSagas.sendOTPSaga);
  yield takeLatest(registrationActionTypes.CHECK_OTP, authSagas.checkOTPSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
