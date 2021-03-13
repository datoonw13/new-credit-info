import React from 'react';
import {Identify, Reset} from '../index';
import useStep from './useStep';

const Step = () => {
  const {step, setStep, username, setUsername} = useStep();
  return (
    <>
      {step === 'Identify' && (
        <Identify
          setUsername={setUsername}
          username={username}
          setStep={setStep}
        />
      )}
      {step === 'Reset' && <Reset username={username} />}
    </>
  );
};

export default Step;
