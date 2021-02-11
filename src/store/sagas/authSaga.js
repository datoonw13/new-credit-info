import {put} from 'redux-saga/effects';
import {
  CHECKED_SIGNED_IN,
  navigateAction,
  notifyAction,
  resetStoreAction,
} from '../ducks/mainDuck';
import axiosInstance from '../../services/interceptorService';
import AsyncStorage from '@react-native-community/async-storage';
import {
  SET_COUNTRIES,
  setRegisterDataAction,
  setRegisterLastStepAction,
  setRegisterSelectedStepAction,
  updateRegisterDataAction,
} from '../ducks/authDuck';
import i18n from 'i18n-js';
import {translate} from '../../services/localizeService';
import jwtDecode from 'jwt-decode';

export function* signInSaga({data}) {
  try {
    const res = yield axiosInstance.post('auth', data);
    yield AsyncStorage.setItem('accessToken', res.accessToken);
    yield AsyncStorage.setItem('refreshToken', res.refreshToken);
    const jwtData = jwtDecode(res.accessToken);
    console.log(jwtData);
    // yield put(
    //   setUserDataAction({
    //     displayName: res.displayName,
    //     email: res.email,
    //     role: res.role,
    //     id: res.id,
    //   }),
    // );
    if (jwtData.status === 'REGISTERED') {
      const userInfo = yield axiosInstance.get(
        'customer/info?language=' + i18n.locale.toUpperCase(),
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
      yield put(navigateAction('SignUp'));
    } else {
      yield put({type: CHECKED_SIGNED_IN, isSignedIn: true});
    }
  } catch (error) {
    if (error.response.status === 409) {
      yield notifyAction(
        'error',
        translate('ERROR'),
        translate(error.response.data.errorCode.toUpperCase()),
      );
    }
  }
}

export function* signUpSaga(payload) {
  try {
    yield axiosInstance.post(
      'register?language=' + i18n.locale.toUpperCase(),
      payload.data,
    );
    const res = yield axiosInstance.post('auth', {
      username: payload.data.userName,
      password: payload.data.password,
    });
    yield AsyncStorage.setItem('accessToken', res.accessToken);
    yield AsyncStorage.setItem('refreshToken', res.refreshToken);
    yield put(updateRegisterDataAction(payload.data));
    yield put(setRegisterLastStepAction(3));
    yield put(setRegisterSelectedStepAction(3));
    yield notifyAction(
      'success',
      translate('SUCCESS'),
      translate('USER_CREATE_SUCCESS'),
    );
  } catch (error) {
    if (error.response.status === 409) {
      yield notifyAction(
        'error',
        translate('ERROR'),
        translate(error.response.data.errorCode.toUpperCase()),
      );
    }
  }
}

export function* getCustomerInfoSaga(payload) {
  try {
    const query = payload.step !== null ? '&step=' + payload.step : '';
    const userInfo = yield axiosInstance.get(
      'customer/info?language=' + i18n.locale.toUpperCase() + query,
    );
    yield put(updateRegisterDataAction(userInfo));
  } catch (error) {
    if (error.response.status === 409) {
      yield notifyAction(
        'error',
        translate('ERROR'),
        translate(error.response.data.errorCode.toUpperCase()),
      );
    }
  }
}

export function* setCustomerExtraSaga(payload) {
  try {
    yield axiosInstance.put('customer/extra', payload.data);
    yield put(updateRegisterDataAction(payload.data));
    yield put(setRegisterLastStepAction(4));
    yield put(setRegisterSelectedStepAction(4));
  } catch (error) {
    if (error.response.status === 409) {
      yield notifyAction(
        'error',
        translate('ERROR'),
        translate(error.response.data.errorCode.toUpperCase()),
      );
    }
  }
}

export function* acceptAgreementSaga() {
  try {
    yield axiosInstance.patch('customer/agreement');
    yield put(updateRegisterDataAction({agreement: true}));
    yield put(setRegisterLastStepAction(5));
    yield put(setRegisterSelectedStepAction(5));
  } catch (error) {
    if (error.response.status === 409) {
      yield notifyAction(
        'error',
        translate('ERROR'),
        translate(error.response.data.errorCode.toUpperCase()),
      );
    }
  }
}

export function* sendOTPSaga(payload) {
  try {
    yield axiosInstance.put('customer/sendotp?phone=' + payload.phone);
    yield put(updateRegisterDataAction({phone: payload.phone}));
    yield put(
      notifyAction(
        'success',
        translate('SUCCESS'),
        '+995' + payload.phone + translate('SEND_OTP_SUCCESS'),
      ),
    );
  } catch (error) {
    if (error.response.status === 409) {
      yield notifyAction(
        'error',
        translate('ERROR'),
        translate(error.response.data.errorCode.toUpperCase()),
      );
    }
  }
}

export function* checkOTPSaga(payload) {
  try {
    yield axiosInstance.put('customer/checkotp', {code: payload.code});
    yield put(
      notifyAction(
        'success',
        translate('SUCCESS'),
        translate('REGISTER_SUCCESS'),
      ),
    );
  } catch (error) {
    if (error.response.status === 409) {
      yield notifyAction(
        'error',
        translate('ERROR'),
        translate(error.response.data.errorCode.toUpperCase()),
      );
    }
  }
}

export function* updatePasswordSaga(payload) {
  try {
    yield axiosInstance.patch('auth/updatePassword', payload.data);
    yield notifyAction('success', 'Success', 'Password Changed Successfully');
    yield navigateAction('Apartments');
  } catch (error) {
    yield notifyAction('error', 'Error', error.response.data.errorCode);
  }
}

export function* logoutSaga() {
  try {
    yield axiosInstance.delete('auth/signOut');
    yield AsyncStorage.removeItem('token');
    yield put(resetStoreAction());
  } catch (error) {
    yield notifyAction('error', 'Error', 'Something went wrong');
  }
}

export function* getCountriesSaga() {
  try {
    const countries = yield axiosInstance.get(
      'country?language=' + i18n.locale.toUpperCase(),
    );
    yield put({type: SET_COUNTRIES, countries});
  } catch (error) {
    yield notifyAction('error', 'Error', 'Something went wrong');
  }
}
