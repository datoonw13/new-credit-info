/** cSpell: disable */
import {privacyTextKA} from './privacy';

export default {
  appName: 'კრედიტინფო',
  auth: 'ავტორიზაცია',
  user: 'მომხმარებელი',
  password: 'პაროლი',
  company: 'სს `კრედიტინფო საქართველო`',
  companyAddress: 'თარხნიშვილის ქ. 2 თბილისი 0179 საქართველო',
  back: 'უკან',
  error: 'დაფიქსირდა შეცდომა',
  success: 'ოპერაცია წარმატებით შესრულდა',
  save: 'შეინახე',
  ok: 'OK',
  close: 'დახურვა',
  settings: 'პარამეტრები',
  activate: 'გაააქტიურე',

  month: 'თვე',

  login: 'შესვლა',
  service: 'მომსახურება',
  faq: 'ხშირად დასმული კითხვები',
  privacy: 'კონფიდენციალურობა',

  haveAccount: 'გაქვს ანგარიში?',

  individualPerson: 'ფიზიკური პირი',
  legalEntity: 'იურიდიული პირი',

  notRequired: 'არასავალდებულოა',
  continue: 'გაგრძელება',

  privacyText: privacyTextKA,

  authorization: {
    pleaseFill: 'გთხოვთ შეავსოთ მოცემული ველები...',
    rememberMe: 'მომხმარებლის დამახსოვრება',
    forgotPassword: 'დაგავიწყდა პაროლი?',
    areYouNotRegistered: 'არ გაქვს ანგარიში?',
    register: 'რეგისტრაცია',

    validUsername: 'გთხოვთ, შეიყვანეთ სწორი ID...',
    validPassword: 'გთხოვთ, შეიყვანეთ სწორი პაროლი...',

    wrongCredentials: 'გთხოვთ შეიყვანოთ სწორი მონაცემები!',
  },

  registration: {
    chooseServiceType: 'აირჩიეთ მომსახურების ტიპი',
    personalInfo: 'პირადი ინფორმაცია',
    setPassword: 'დააყენეთ პაროლი',
    contactInfo: 'საკონტაქტო ინფორმაცია',
    terms: 'პირობები',
    verifyPhone: 'ნომრის დადასტურება',

    title: 'რეგისტრაცია',
    personalNumber: 'პირადი ნომერი',
    repeatPersonalNumber: 'გაიმეორეთ პირადი ნომერი',
    validPersonalNumber: 'გთხოვთ შეასწოროთ პირადი ნომერი',
    validRepeatPersonalNumber: 'პირადი ნომრები არ ემთხვევა',
    identificationCode: 'საიდენტიფიკაციო კოდი',
    repeatIdentificationCode: 'გაიმეორეთ საიდენტიფიკაციო კოდი',
    validIdentificationCode: 'გთხოვთ შეასწოროთ საიდენტიფიკაციო კოდი',
    validRepeatIdentificationCode: 'საიდენტიფიკაციო კოდები არ ემთხვევა',
    name: 'დასახელება',
    validName: 'გთხოვთ, შეასწორეთ კომპანიის დასახელება...',
    firstName: 'სახელი',
    validFirstName: 'გთხოვთ, შეასწორეთ სახელის ველი...',
    lastName: 'გვარი',
    validLastName: 'გთხოვთ, შეამოწმეთ გვარის ველი...',

    password: 'პაროლი',
    validPassword: 'გთხოვთ, შეიყვანეთ უფრო ძლიერი პაროლი...',
    repeatPassword: 'გაიმეორეთ პაროლი',
    validRepeatPassword: 'პაროლები არ ემთხვევა',

    dateOfFoundation: 'დაარსების თარიღი',
    validDateOfFoundation: 'გთხოვთ, აირჩიეთ დაარსების თარიღი',
    birthDate: 'აირჩიეთ დაბადების თარიღი',
    chooseYear: 'აირჩიეთ წელი',
    validBirthDate: 'გთხოვთ, აირჩიოთ დაბადების თარიღი',
    country: 'აირჩიეთ ქვეყანა',
    validCountry: 'გთხოვთ, აირჩიოთ ქვეყანა',
    address: 'მისამართი',
    validAddress: 'გთხოვთ, მიუთითეთ მისამართი',
    email: 'ელ. ფოსტა',
    validEmail: 'გთხოვთ, შეასწორეთ ელ. ფოსტა',

    acceptTerms: 'ვადასტურებ, რომ გავეცანი და ვეთანხმები წესებს და პირობებს',

    phone: 'ტელეფონის ნომერი',
    validPhone: 'შეიყვანეთ ტელეფონის ნომერი',
    OTP: 'ერთჯერადი კოდი',
    validOTP: 'შეიყვანეთ ერთჯერადი კოდი',
    sendAgain: 'ხელახლა გამოგზავნა',
  },

  forgotPassword: {
    title: 'პაროლის აღდგენა',
    haveAccount: 'გაქვს ანგარიში?',
  },

  signInPass: {
    title: 'Touch ID-ით ან პასკოდით ავტორიზაცია',
    otherUser: 'სხვა მომხმარებელი',
    forgotPasscode: 'დაგავიწყდა პასკოდი?',
    forgotPassword: 'დაგავიწყდა პაროლი?',
    biometricsNotAvailable:
      'ბიომეტრული საშუალებით ავტორიზაცია ამ მოწყობილობაზე არაა შესაძლებელი!',
    touchId: 'Touch ID',
    faceId: 'Face ID',
    biometrics: 'Biometrics',
    passcode: 'პასკოდი',
    authError: 'დაფიქსირდა შეცდომა ბიომეტრული საშუალებით აუთენტიპიკაციისას...',
    wrongPasscode: 'თქვენს მიერ მითითებული პასკოდი არასწორია...',
    passcodeNotSet: 'თქვენ არ გაქვთ გააქტიურებული პასკოდით ავტორიზაცია...',
  },

  drawer: {
    notifications: 'შეტყობინებები',
  },

  personalInfo: {
    title: 'პირადი ინფორმაცია',
  },

  security: {
    title: 'უსაფრთხოება',
    signInWithPasscode: 'პასკოდით შესვლა',
    signInWithFingerprint: 'თითის ანაბეჭდით შესვლა',
    changePassword: 'პაროლის შეცვლა',
    twoFactorAuth: 'ორმაგი ავტორიზაცია',

    setPasscode: 'დააყენეთ პასკოდი',
    repeatPasscode: 'გაიმეორეთ პასკოდი',
    passcodeMismatch:
      'პასკოდები არ ემთხვევა ერთმანეთს... გთხოვთ სცადოთ ხელახლა...',
    passcodeSaved: 'პასკოდით შესვლა წარმატებით გააქტიურდა!',

    easyAuth: 'მარტივი შესვლა',
    easyAuthDescription:
      'მარტივი შესვლისთვის გამოიყენე თითის ანაბეჭდით ან პასკოდით შესვლა',
    easyAuthActivated: 'მარტივი ავტორიზაცია გააქტიურებულია!',
  },

  updatePersonalData: {
    title: 'პირადი ინფორმაციის შეცვლა',
    contact: 'საკონტაქტო ინფორმაცია',
    verification: 'ვერიფიკაცია',
    verified: 'ვერიფიცირებული',
    updateSuccess: 'მონაცემები წარმატებით განახლდა!',
    updateError: 'სამწუხაროდ მონაცემების განახლება ვერ მოხერხდა...',
  },

  termsAndConditions: {
    title: 'პირობები',
  },

  dropdownAlert: {
    userCreateSuccess: 'მომხმარებელი წარმატებით შეიქმნა',
    registerSuccess: 'მომხმარებელი წარმატებით დარეგისტრირდა',
    sendOTPSuccess: 'ჩვენ გამოგიგზავნეთ ერთჯერადი კოდი, მიყევით ინსტრუქციას.',
    invalidCodeTitle: 'არასწორი SMS კოდი',
    invalidCode: 'თქვენს მიერ შეყვანილი SMS კოდი არასწორია',
  },

  modal: {
    smsCode: 'SMS კოდი',
    sendOTPSuccess: 'ჩვენ გამოგიგზავნეთ ერთჯერადი კოდი, მიყევით ინსტრუქციას.',
    verifyPhone: 'ტელეფონის დადასტურება',
    verifyPhoneText:
      'თქვენ გამოგეგზავნათ კოდი, შეიყვანეთ მითითებულ ადგილას, რათა მოხდეს ტელეფონის დადასტურება',
  },

  dates: {
    selectDate: 'აირჩიეთ თარიღი',
    year: 'წელი',
    month: 'თვე',
    day: 'რიცხვი',
  },

  serviceScreen: {
    standard: 'სტანდარტული',
    premium: 'პრემიუმი',

    promote: 'აირჩიეთ წლიური პაკეტი და დაზოგეთ თანხა!',
  },
};
