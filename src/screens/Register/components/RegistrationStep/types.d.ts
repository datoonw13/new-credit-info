type RegistrationStepProps = {
  registerSelectedStep: number;
  registerLastStep: number;
  registerData: any;
};

type RegistrationStepFC = (props: RegistrationStepProps) => JSX.Element;
