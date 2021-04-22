import {RegistrationSteps} from 'screens/Register/components/RegistrationStep/enum';
import {Credentials} from 'types/global';

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
  authStatus: AuthStatus;
  user?: ProfileInfo;
};

type AuthStatus =
  | null
  | 'NON_AUTHORIZED'
  | 'SHOULD_PAY'
  | 'SHOULD_SUBSCRIBE'
  | 'FULL_ACCESS';

type SignInData = Credentials & {
  rememberMe?: boolean;
};

type SignInSagaAction = {
  type: string;
  data: SignInData;
};
