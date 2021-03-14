import {put, takeLatest} from 'redux-saga/effects';
import {setUserDataAction} from 'store/registration/actions';
import {setAuthStatusAction} from 'store/app/actions';
import * as actionTypes from 'store/app/actionTypes';
import * as services from 'services';

/**
 * Check if user is authenticated refresh data
 * and if not set user auth status to false.
 */
function* authRefresh() {
  try {
    const userData = yield services.refreshAuth();
    yield put(setUserDataAction(userData));
    yield put(setAuthStatusAction(true));
  } catch (error) {
    console.log(error);
    yield put(setAuthStatusAction(false));
  }
}

/**
 * Register app sagas with the actions.
 */
function* appSagas() {
  yield takeLatest(actionTypes.AUTH_REFRESH, authRefresh);
}

export default appSagas;
