import {put, takeLatest} from 'redux-saga/effects';
import axiosInstance from 'services/axios';
import {setUserDataAction} from 'store/registration/actions';
import {setAuthStatusAction} from 'store/app/actions';
import * as actionTypes from 'store/app/actionTypes';

/**
 * Check if user is authenticated refresh data
 * and if not set user auth status to false.
 */
function* checkSignedInSaga() {
  try {
    const userData = yield axiosInstance.get('ping');
    yield put(setUserDataAction(userData));
    yield put(setAuthStatusAction(true));
  } catch (error) {
    yield put(setAuthStatusAction(false));
  }
  yield put(setAuthStatusAction(false));
}

/**
 * Register app sagas with the actions.
 */
function* appSagas() {
  yield takeLatest(actionTypes.CHECK_SIGNED_IN, checkSignedInSaga);
}

export default appSagas;
