import {RegistrationSteps} from 'screens/Register/components/RegistrationStep/enum';

type ApplicationState = {
  registration: RegistrationState;
  app: AppState;
};

type RegistrationState = {
  userData: any;
  registerSelectedStep: RegistrationSteps;
  registerLastStep: RegistrationSteps;
  registerData: any;
  countries: any;
};

type AppState = {
  isLoading: boolean;
  isSignedIn: boolean;
};
