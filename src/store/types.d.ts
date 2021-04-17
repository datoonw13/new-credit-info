import {RegistrationSteps} from 'screens/Register/components/RegistrationStep/enum';
import {Credentials} from 'types/global';

type ApplicationState = {
  registration: RegistrationState;
  auth: AuthState;
  app: AppState;
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

type AppState = {
  mode: AppMode;
};

type SignInData = Credentials & {
  rememberMe?: boolean;
};

type SignInSagaAction = {
  type: string;
  data: SignInData;
};

type AppMode =
  | 'INITIATION'
  | 'NON_AUTHORIZED'
  | 'BILLING'
  | 'PACKAGE_SELECTION'
  | 'AUTHORIZED';
