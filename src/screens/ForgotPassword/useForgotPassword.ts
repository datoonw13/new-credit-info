import {useState} from 'react';

const useForgotPassword = () => {
  const [activeStep, setActiveStep] = useState<ForgotPasswordStep>('Identify');

  return {
    activeStep,
  };
};

export default useForgotPassword;
