import {privacyTextEN} from './privacy';

export default {
  appName: 'CreditInfo',
  auth: 'Authorization',
  user: 'User',
  password: 'Password',
  company: 'JSC `CREDITINFO GEORGIA`',
  companyAddress: 'Tarkhnishvili street 2 Tbilisi 0179 Georgia',
  back: 'Back',
  error: 'Error Encountered',
  success: 'Success',
  save: 'Save',
  ok: 'OK',
  close: 'Close',
  settings: 'Settings',
  activate: 'Activate',

  month: 'Month',

  login: 'Log In',
  service: 'Service',
  faq: 'FAQ',
  privacy: 'Privacy',

  haveAccount: 'I Have Account',

  individualPerson: 'Individual',
  legalEntity: 'Legal Entity',

  notRequired: 'Not Required',
  continue: 'Continue',

  privacyText: privacyTextEN,

  authorization: {
    pleaseFill: 'Please, fill the inputs below...',
    rememberMe: 'Remember Me',
    forgotPassword: 'Forgot Password?',
    areYouNotRegistered: 'Not Registered?',
    register: 'Register',

    validUsername: 'Please, enter your valid username...',
    validPassword: 'Please, enter your valid password...',

    wrongCredentials: 'Invalid credentials provided!',
  },

  registration: {
    chooseServiceType: 'Choose Entity Type',
    personalInfo: 'Personal Info',
    setPassword: 'Set Password',
    contactInfo: 'Contact Info',
    terms: 'Terms and Conditions',
    verifyPhone: 'Verify Phone Number',

    title: 'Registration',
    personalNumber: 'Personal Number',
    repeatPersonalNumber: 'Repeat Personal Number',
    validPersonalNumber: 'Please, correct personal number...',
    validRepeatPersonalNumber: 'Personal numbers not same...',
    identificationCode: 'Identification Code',
    repeatIdentificationCode: 'Repeat Identification Code',
    validIdentificationCode: 'Please, correct identification code...',
    validRepeatIdentificationCode: 'Identification codes not same...',
    name: 'Name',
    validName: 'Please, correct company name...',
    firstName: 'First Name',
    validFirstName: 'Please, correct first name...',
    LastName: 'Last Name',
    validLastName: 'Please, correct last name...',

    password: 'Password',
    validPassword: 'Please, type stronger password...',
    repeatPassword: 'Please, repeat password',
    validRepeatPassword: 'Passwords are not same',
    passwordGuideTitle: 'Strong password should be hard to guess',
    passwordGuideDescription:
      'Please use hard to guess words, phrases, symbols and numbers, also non-standard uPPercasing',

    dateOfFoundation: 'Date of Foundation',
    validDateOfFoundation: 'Please, choose Date of Foundation',
    birthDate: 'Choose Date of Birth',
    chooseYear: 'Choose Year',
    validBirthDate: 'Please, choose Date of Birth',
    country: 'Choose Country',
    validCountry: 'Please, choose country',
    address: 'Address',
    validAddress: 'Please, type your address',
    email: 'E Mail',
    validEmail: 'Please, correct your e-mail',

    acceptTerms: 'I agree terms and conditions',

    phone: 'Phone Number',
    validPhone: 'Please, type phone number',
    OTP: 'One Time Password',
    validOTP: 'Please, type One Time Password',
    sendAgain: 'Send Again',
  },

  forgotPassword: {
    title: 'Reset Password',
    haveAccount: 'Do you have account?',
  },

  signInPass: {
    title: 'Sign in by Touch ID or passcode',
    otherUser: 'Other User',
    forgotPasscode: 'Forgot Passcode?',
    forgotPassword: 'Forgot Password?',
    biometricsNotAvailable:
      'Sorry, biometrics are not available on this device!',
    touchId: 'Touch ID',
    faceId: 'Face ID',
    biometrics: 'Biometrics',
    passcode: 'Passcode',
    authError: 'Error encountered during biometric authentication...',
    wrongPasscode: 'You have provided wrong passcode...',
    passcodeNotSet: "You haven't set passcode in you settings...",
  },

  drawer: {
    notifications: 'Notifications',
  },

  personalInfo: {
    title: 'Personal Info',
    contact: 'Contact Info',
  },

  security: {
    title: 'Security',
    signInWithPasscode: 'Sign In with Passcode',
    signInWithFingerprint: 'Sign In with Fingerprint',
    changePassword: 'Change Password',
    twoFactorAuth: 'Two Factor Authorization',

    setPasscode: 'Set Passcode',
    repeatPasscode: 'Repeat Passcode',
    passcodeMismatch: "Typed passcodes arn't same... please try again...",
    passcodeSaved: 'Sign with passcode has successfully activated!',

    easyAuth: 'Easy Authorization',
    easyAuthDescription:
      'Use biometrics feature or passcode for easy authorization...',
    easyAuthActivated: 'Easy authorizations is activated!',
  },

  updatePersonalData: {
    title: 'Update Personal Data',
    contact: 'Contact Info',
    verification: 'Verification',
    verified: 'Verified',
    updateSuccess: 'Personal information successfully updated!',
    updateError: 'Encountered error during personal information update...',
  },

  changePassword: {
    title: 'Change Password',
  },

  termsAndConditions: {
    title: 'Terms and Conditions',
    lastModify: 'Last modify date',
  },

  dropdownAlert: {
    userCreateSuccess: 'User created successfully!',
    registerSuccess: 'You have registered successfully!',
    sendOTPSuccess:
      'We have sent you one-time-password, please, follow the instructions...',
    invalidCodeTitle: 'Invalid Code',
    invalidCode: 'The code you entered is invalid',
    errorTryLater: 'Encountered error, please try later...',
  },

  modal: {
    smsCode: 'SMS Code',
    sendOTPSuccess:
      'We sent you one time password, please follow instructions...',
    verify: 'Verify',
    verifyPhone: 'Verify Phone',
    verifyText: 'You have received code, please fill in and verify...',
    verifyEmail: 'Verify Email',
    verifyEmailText:
      'You have received code on e-mail, please fill in and verify...',
    verifyEmailSuccess: 'E-mail successfully approved!',
    verifyEmailFailure: "E-mail couldn't approved!",
    verifyPhoneSuccess: 'Phone number successfully approved!',
    verifyPhoneFailure: "Phone number couldn't approved!",
    correctCode: 'Please correct verification code...',
  },

  dates: {
    selectDate: 'Select Date',
    year: 'Year',
    month: 'Month',
    day: 'Day',
  },

  serviceScreen: {
    standard: 'Standard',
    premium: 'Premium',

    promote: 'Choose annual plan and save money!',
  },
};
