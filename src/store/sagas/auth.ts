import {put, takeLatest} from 'redux-saga/effects';
import {setAuthStatusAction} from 'store/auth/actions';
import {
  setRegisterSelectedStepAction,
  setRegisterLastStepAction,
  setRegisterDataAction,
  setUserDataAction,
} from 'store/registration/actions';
import * as actionTypes from 'store/auth/actionTypes';
import * as services from 'services';
import jwtDecode from 'jwt-decode';
import {goTo} from 'utils/navigation';
import {
  setAccessToken,
  setRefreshToken,
  removeAccessToken,
  removeRefreshToken,
} from 'utils/token';
import {alertError} from 'utils/dropdownAlert';

/**
 * Saga for user sign in.
 * Also determine if user is being registered,
 * and if so set proper data into the state.
 */
function* signInSaga({data}: any) {
  try {
    const {accessToken, refreshToken}: AuthResponse = yield services.auth(data);

    yield setAccessToken(accessToken);
    yield setRefreshToken(refreshToken);

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
 * Sign out delete tokens.
 */
function* signOut() {
  yield put(setAuthStatusAction(false));
  yield removeRefreshToken();
  yield removeAccessToken();
}

/**
 * Check if user is authenticated refresh data
 * and if not set user auth status to false.
 */
function* authRefresh() {
  try {
    const userData: AuthResponse = yield services.refreshAuth();
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
function* authSagas() {
  yield takeLatest(actionTypes.AUTH_REFRESH, authRefresh);
  yield takeLatest(actionTypes.REQUEST_SIGN_IN, signInSaga);
  yield takeLatest(actionTypes.SIGN_OUT, signOut);
}

export default authSagas;
