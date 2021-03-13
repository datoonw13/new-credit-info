import {useState} from 'react';

const useStep = () => {
  const [username, setUsername] = useState('');
  const [step, setStep] = useState<ForgotPasswordStep>('Identify');

  return {
    setUsername,
    username,
    setStep,
    step,
  };
};

export default useStep;
