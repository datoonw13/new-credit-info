import {put} from 'redux-saga/effects';
import axiosInstance from 'services/interceptorService';
import {setUserDataAction} from 'store/ducks/authDuck';
import {CHECKED_SIGNED_IN} from 'store/ducks/mainDuck';

export function* checkSignedInSaga() {
  try {
    const userData = yield axiosInstance.get('ping');
    yield put(setUserDataAction(userData));
    yield put({type: CHECKED_SIGNED_IN, isSignedIn: true});
  } catch (error) {
    yield put({type: CHECKED_SIGNED_IN, isSignedIn: false});
  }
  yield put({type: CHECKED_SIGNED_IN, isSignedIn: false});
}
