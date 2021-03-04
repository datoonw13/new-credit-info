import {RegistrationSteps} from './components/RegistrationStep/enum';

/**
 * Registration each step title.
 */
export const registrationStepTitles = {
  [RegistrationSteps.ChooseEntity]: 'registration.chooseServiceType',
  [RegistrationSteps.SetPersonalInfo]: 'registration.personalInfo',
  [RegistrationSteps.SetPassword]: 'registration.setPassword',
  [RegistrationSteps.SetAdditionalInfo]: 'registration.contactInfo',
  [RegistrationSteps.AcceptTerms]: 'registration.terms',
  [RegistrationSteps.VerifyPhone]: 'registration.verifyPhone',
};
