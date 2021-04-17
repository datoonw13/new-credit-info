import {put, takeLatest} from 'redux-saga/effects';
import * as authActions from 'store/auth/actions';
import * as appActions from 'store/app/actions';
import * as registerActions from 'store/registration/actions';
import {saveProfileInfo} from 'store/auth/sagaActions';
import * as actionTypes from 'store/auth/actionTypes';
import * as services from 'services';
import jwtDecode from 'jwt-decode';
import {goTo} from 'utils/navigation';
import {
  removeRefreshToken,
  removeAccessToken,
  setRefreshToken,
  setPersonalInfo,
  setAccessToken,
  rememberUser,
  forgetUser,
} from 'utils/storage';
import {alertError} from 'utils/dropdownAlert';
import {setCredentials, clearCredentials} from 'utils/keychain';
import {SignInSagaAction} from 'store/types';

/**
 * Saga for user sign in.
 * Also determine if user is being registered,
 * and if so set proper data into the state.
 */
function* signInSaga({data}: SignInSagaAction) {
  const {username, password, rememberMe} = data;
  try {
    const {accessToken, refreshToken}: AuthResponse = yield services.auth({
      username,
      password,
    });

    yield setAccessToken(accessToken);
    yield setRefreshToken(refreshToken);

    const jwtData = jwtDecode<any>(accessToken);

    if (jwtData.status === 'REGISTERED') {
      const userInfo: CustomerInfoResponse = yield services.customerInfo();
      yield put(
        registerActions.setRegisterDataAction({
          ...userInfo,
          customerType: jwtData.customerType,
        }),
      );
      if (userInfo.userName) {
        yield put(registerActions.setRegisterLastStepAction(4));
        yield put(registerActions.setRegisterSelectedStepAction(4));
      } else if (userInfo.birthDate) {
        yield put(registerActions.setRegisterLastStepAction(5));
        yield put(registerActions.setRegisterSelectedStepAction(5));
      } else {
        yield put(registerActions.setRegisterLastStepAction(6));
        yield put(registerActions.setRegisterSelectedStepAction(6));
      }
      goTo('MainStackBeforeAuthNavigator', 'Register');
    } else {
      yield setCredentials(data);
      yield put(authActions.setAuthStatusAction(true));
      yield put(saveProfileInfo());

      if (rememberMe === true) {
        rememberUser(username);
      } else if (rememberMe === false) {
        forgetUser();
      }
    }
    yield put(appActions.setAppMode('AUTHORIZED'));
  } catch (error) {
    console.dir(error);
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }

    if (error.response.status === 403) {
      alertError('error', 'authorization.wrongCredentials');
    }
  }
}

/**
 * Save profile information.
 */
function* saveProfileInformation() {
  try {
    const data: ProfileInfo = yield services.getProfileInfo();
    yield setPersonalInfo(data);
    yield put(authActions.setUserDataAction(data));
  } catch (e) {
    console.log(e);
  }
}

/**
 * Sign out delete tokens.
 */
function* signOut() {
  yield put(authActions.setAuthStatusAction(false));
  yield removeRefreshToken();
  yield removeAccessToken();
  yield clearCredentials();
}

/**
 * Check if user is authenticated refresh data
 * and if not set user auth status to false.
 */
function* authRefresh() {
  try {
    const userData: AuthResponse = yield services.refreshAuth();
    yield put(registerActions.setUserDataAction(userData));
    yield put(authActions.setAuthStatusAction(true));
  } catch (error) {
    console.log(error);
    yield put(authActions.setAuthStatusAction(false));
  }
}

/**
 * Register app sagas with the actions.
 */
function* authSagas() {
  yield takeLatest(actionTypes.AUTH_REFRESH, authRefresh);
  yield takeLatest(actionTypes.REQUEST_SIGN_IN, signInSaga);
  yield takeLatest(actionTypes.SAVE_PROFILE_INFO, saveProfileInformation);
  yield takeLatest(actionTypes.SIGN_OUT, signOut);
}

export default authSagas;
