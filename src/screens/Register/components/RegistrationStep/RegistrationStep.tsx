import React from 'react';
import {
  SetAdditionalInfo,
  SetPersonalInfo,
  ChooseEntity,
  AcceptTerms,
  SetPassword,
  VerifyPhone,
} from '../index';
import {RegistrationSteps} from './enum';

const RegistrationStep: RegistrationStepFC = ({
  registerSelectedStep,
  registerLastStep,
  registerData,
}) => {
  switch (registerSelectedStep) {
    case RegistrationSteps.ChooseEntity:
      return (
        <ChooseEntity
          lastStep={registerLastStep}
          customerType={registerData.customerType}
        />
      );
    case RegistrationSteps.SetPersonalInfo:
      return (
        <SetPersonalInfo
          lastStep={registerLastStep}
          registerData={registerData}
          isPerson={registerData.customerType === 'PERSON'}
        />
      );
    case RegistrationSteps.SetPassword:
      return (
        <SetPassword lastStep={registerLastStep} registerData={registerData} />
      );
    case RegistrationSteps.SetAdditionalInfo:
      return (
        <SetAdditionalInfo
          lastStep={registerLastStep}
          registerData={registerData}
          isPerson={registerData.customerType === 'PERSON'}
        />
      );
    case RegistrationSteps.AcceptTerms:
      return <AcceptTerms lastStep={registerLastStep} />;
    case RegistrationSteps.VerifyPhone:
      return <VerifyPhone registerData={registerData} />;
    default:
      return <></>;
  }
};

export default RegistrationStep;
