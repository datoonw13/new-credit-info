import {put} from 'redux-saga/effects';
import {CHECKED_SIGNED_IN, resetStoreAction} from 'store/ducks/mainDuck';
import axiosInstance from 'services/interceptorService';
import AsyncStorage from '@react-native-community/async-storage';
import {
  setRegisterDataAction,
  setRegisterLastStepAction,
  setRegisterSelectedStepAction,
  updateRegisterDataAction,
  setCountriesAction,
} from 'store/registration/actions';
import jwtDecode from 'jwt-decode';
import {global} from 'utils';
import {goTo} from 'utils/navigation';
import {alertError, alertSuccess} from 'utils/dropdownAlert';

export async function* signInSaga({data}: any) {
  try {
    const res = yield axiosInstance.post('auth', data);
    yield AsyncStorage.setItem('accessToken', res.accessToken);
    yield AsyncStorage.setItem('refreshToken', res.refreshToken);
    const jwtData = jwtDecode(res.accessToken);
    if (jwtData.status === 'REGISTERED') {
      const userInfo = yield axiosInstance.get(
        'customer/info?language=' + global.lang.toUpperCase(),
      );
      yield put(
        setRegisterDataAction({
          ...userInfo,
          customerType: jwtData.customerType,
        }),
      );
      if (userInfo.userName) {
        yield put(setRegisterLastStepAction(3));
        yield put(setRegisterSelectedStepAction(3));
      } else if (userInfo.birthDate) {
        yield put(setRegisterLastStepAction(4));
        yield put(setRegisterSelectedStepAction(4));
      } else {
        yield put(setRegisterLastStepAction(5));
        yield put(setRegisterSelectedStepAction(5));
      }
      goTo('MainStackNavigator', 'Register');
    } else {
      yield put({type: CHECKED_SIGNED_IN, isSignedIn: true});
    }
  } catch (error) {
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

export function* signUpSaga(payload: any) {
  try {
    yield axiosInstance.post(
      'register?language=' + global.lang.toUpperCase(),
      payload.data,
    );
    const res = yield axiosInstance.post('auth', {
      username: payload.data.userName,
      password: payload.data.password,
    });
    yield AsyncStorage.setItem('accessToken', res.accessToken);
    yield AsyncStorage.setItem('refreshToken', res.refreshToken);
    yield put(updateRegisterDataAction(payload.data));
    yield put(setRegisterLastStepAction(4));
    yield put(setRegisterSelectedStepAction(4));
    yield alertSuccess('success', 'registration.userCreateSuccess');
  } catch (error) {
    console.log(error);
    if (error.response.status === 409) {
      yield alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

export function* getCustomerInfoSaga(payload: any) {
  try {
    const query = payload.step !== null ? '&step=' + payload.step : '';
    const userInfo = yield axiosInstance.get(
      'customer/info?language=' + global.lang.toUpperCase() + query,
    );
    yield put(updateRegisterDataAction(userInfo));
  } catch (error) {
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

export function* setCustomerExtraSaga(payload: any) {
  try {
    yield axiosInstance.put('customer/extra', payload.data);
    yield put(updateRegisterDataAction(payload.data));
    yield put(setRegisterLastStepAction(5));
    yield put(setRegisterSelectedStepAction(5));
  } catch (error) {
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

export function* acceptAgreementSaga() {
  try {
    yield axiosInstance.patch('customer/agreement');
    yield put(updateRegisterDataAction({agreement: true}));
    yield put(setRegisterLastStepAction(6));
    yield put(setRegisterSelectedStepAction(6));
  } catch (error) {
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

export function* sendOTPSaga(payload: any) {
  try {
    yield axiosInstance.put('customer/sendotp?phone=' + payload.phone);
    yield put(updateRegisterDataAction({phone: payload.phone}));
    alertSuccess('success', 'SEND_OTP_SUCCESS');
  } catch (error) {
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

export function* checkOTPSaga(payload: any) {
  try {
    yield axiosInstance.put('customer/checkotp', {code: payload.code});
    alertSuccess('success', 'dropdownAlert.registerSuccess');
  } catch (error) {
    if (error.response.status === 409) {
      alertError('error', error.response.data.errorCode.toUpperCase());
    }
  }
}

export function* updatePasswordSaga(payload: any) {
  try {
    yield axiosInstance.patch('auth/updatePassword', payload.data);
    alertSuccess('success', 'Password Changed Successfully');
  } catch (error) {
    alertError('error', error.response.data.errorCode);
  }
}

export function* logoutSaga() {
  try {
    yield axiosInstance.delete('auth/signOut');
    yield AsyncStorage.removeItem('token');
    yield put(resetStoreAction());
  } catch (error) {
    alertError('error');
  }
}

export function* getCountriesSaga() {
  try {
    const countries = yield axiosInstance.get(
      'country?language=' + global.lang.toUpperCase(),
    );
    yield put(setCountriesAction(countries));
  } catch (error) {
    alertError('error');
  }
}
