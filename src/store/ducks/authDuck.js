export const CHECK_SIGNED_IN = 'my-creditinfo/auth/checkSignedIn';
export const SET_USER_DATA = 'my-creditinfo/auth/setUserData';
export const REQUEST_SIGN_IN = 'my-creditinfo/auth/requestSignIn';
export const REQUEST_SIGN_UP = 'my-creditinfo/auth/requestSignUp';
export const SET_CUSTOMER_EXTRA = 'my-creditinfo/auth/setCustomerExtra';
export const GET_CUSTOMER_INFO = 'my-creditinfo/auth/getCustomerInfo';
export const LOGOUT = 'my-creditinfo/auth/logout';
export const UPDATE_PASSWORD = 'my-creditinfo/auth/updatePassword';
export const GET_COUNTRIES = 'my-creditinfo/auth/getCountries';
export const SET_COUNTRIES = 'my-creditinfo/auth/setCountries';
export const SET_REGISTER_SELECTED_STEP =
  'my-creditinfo/auth/setRegisterSelectedStep';
export const SET_REGISTER_LAST_STEP = 'my-creditinfo/auth/setRegisterLastStep';
export const SET_REGISTER_DATA = 'my-creditinfo/auth/setRegisterData';
export const UPDATE_REGISTER_DATA = 'my-creditinfo/auth/updateRegisterData';
export const ACCEPT_AGREEMENT = 'my-creditinfo/auth/acceptAgreement';
export const SEND_OTP = 'my-creditinfo/auth/sendOTP';
export const CHECK_OTP = 'my-creditinfo/auth/checkOTP';

const initialState = {
  userData: null,
  registerSelectedStep: 1,
  registerLastStep: 1,
  registerData: {},
  countries: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };
    case SET_REGISTER_SELECTED_STEP:
      return {
        ...state,
        registerSelectedStep: action.step,
      };
    case SET_REGISTER_LAST_STEP:
      return {
        ...state,
        registerLastStep: action.step,
      };
    case SET_REGISTER_DATA:
      return {
        ...state,
        registerData: action.data,
      };
    case UPDATE_REGISTER_DATA:
      return {
        ...state,
        registerData: {...state.registerData, ...action.data},
      };
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.countries,
      };
    default:
      return state;
  }
};

export const checkSignedInAction = () => ({
  type: CHECK_SIGNED_IN,
});

export const signInAction = (data) => ({
  type: REQUEST_SIGN_IN,
  data,
});

export const signUpAction = (data) => ({
  type: REQUEST_SIGN_UP,
  data,
});

export const setCustomerExtraAction = (data) => ({
  type: SET_CUSTOMER_EXTRA,
  data,
});

export const setUserDataAction = (userData) => ({
  type: SET_USER_DATA,
  userData,
});

export const updatePasswordAction = (data) => ({
  type: UPDATE_PASSWORD,
  data,
});

export const logoutAction = () => ({
  type: LOGOUT,
});

export const getCountriesAction = () => ({
  type: GET_COUNTRIES,
});

export const setRegisterSelectedStepAction = (step) => ({
  type: SET_REGISTER_SELECTED_STEP,
  step,
});

export const setRegisterLastStepAction = (step) => ({
  type: SET_REGISTER_LAST_STEP,
  step,
});

export const setRegisterDataAction = (data) => ({
  type: SET_REGISTER_DATA,
  data,
});

export const updateRegisterDataAction = (data) => ({
  type: UPDATE_REGISTER_DATA,
  data,
});

export const getCostumerInfoAction = (step) => ({
  type: GET_CUSTOMER_INFO,
  step,
});

export const acceptAgreementAction = () => ({
  type: ACCEPT_AGREEMENT,
});

export const sendOTPAction = (phone) => ({
  type: SEND_OTP,
  phone,
});

export const checkOTPAction = (code) => ({
  type: CHECK_OTP,
  code,
});
