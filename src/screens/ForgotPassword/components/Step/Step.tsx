import React from 'react';
import {Identify, Reset} from '../index';

const Step: StepFC = ({step}) => {
  return (
    <>
      {step === 'Identify' && <Identify />}
      {step === 'Reset' && <Reset />}
    </>
  );
};

export default Step;
