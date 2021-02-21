type ApplicationState = {
  registration: RegistrationState;
  app: AppState;
};

type RegistrationState = {
  userData: any;
  registerSelectedStep: number;
  registerLastStep: number;
  registerData: any;
  countries: any;
};

type AppState = {
  isLoading: boolean;
  isSignedIn: boolean;
};
