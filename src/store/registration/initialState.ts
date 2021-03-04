import {RegistrationState} from 'store/types';

const registrationInitialState: RegistrationState = {
  userData: null,
  registerSelectedStep: 1,
  registerLastStep: 1,
  registerData: {},
  countries: [],
};

export default registrationInitialState;
