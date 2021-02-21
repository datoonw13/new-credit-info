import {put} from 'redux-saga/effects';
import axiosInstance from 'services/interceptorService';
import {setUserDataAction} from 'store/registration/actions';
import {setAuthStatusAction} from 'store/app/actions';

/**
 * Check if user is authenticated refresh data
 * and if not set user auth status to false.
 */
export function* checkSignedInSaga() {
  try {
    const userData = yield axiosInstance.get('ping');
    yield put(setUserDataAction(userData));
    yield put(setAuthStatusAction(true));
  } catch (error) {
    yield put(setAuthStatusAction(false));
  }
  yield put(setAuthStatusAction(false));
}
