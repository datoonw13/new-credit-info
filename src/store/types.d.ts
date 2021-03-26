import {RegistrationSteps} from 'screens/Register/components/RegistrationStep/enum';

type ApplicationState = {
  registration: RegistrationState;
  auth: AuthState;
};

type RegistrationState = {
  userData: any;
  registerSelectedStep: RegistrationSteps;
  registerLastStep: RegistrationSteps;
  registerData: any;
  countries: any;
};

type AuthState = {
  isLoading: boolean;
  isSignedIn: boolean;
  user?: ProfileInfo;
};
