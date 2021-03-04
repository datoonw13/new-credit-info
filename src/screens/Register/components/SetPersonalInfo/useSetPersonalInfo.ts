import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {
  setRegisterLastStepAction,
  setRegisterSelectedStepAction,
  updateRegisterDataAction,
} from 'store/registration/actions';
import {getCostumerInfo} from 'store/registration/sagaActions';
import {RegistrationSteps} from '../RegistrationStep/enum';

const useSetPersonalInfo = ({
  registerData,
  lastStep,
  isPerson,
}: SetPersonalInfoProps) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const {control, handleSubmit, errors, watch, setValue} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      userName: !registerData.userName ? '' : registerData.userName,
      repeatUserName: !registerData.userName ? '' : registerData.userName,
      firstName: !registerData.firstName ? '' : registerData.firstName,
      lastName: !registerData.lastName ? '' : registerData.lastName,
    },
  });

  useEffect(() => {
    if (lastStep !== 2) {
      if (registerData.userName) {
        setValue('userName', registerData.userName);
        setValue('repeatUserName', registerData.userName);
        setValue('firstName', registerData.firstName);
        setValue('lastName', registerData.lastName);
      } else {
        dispatch(getCostumerInfo(0));
      }
    }
  }, [dispatch, registerData]);

  const onSubmit = (data: any = null) => {
    if (lastStep === 2) {
      dispatch(updateRegisterDataAction(data));
      dispatch(setRegisterLastStepAction(3));
      dispatch(setRegisterSelectedStepAction(3));
    } else {
      dispatch(setRegisterSelectedStepAction(3));
    }
  };

  const onSubmitPress = () =>
    lastStep === RegistrationSteps.SetPersonalInfo
      ? handleSubmit(onSubmit)()
      : onSubmit();

  const usernameErrorMsg =
    errors.userName &&
    t(
      isPerson
        ? 'registration.validPersonalNumber'
        : 'registration.validIdentificationCode',
    );

  const userNameLabel = isPerson
    ? 'registration.personalNumber'
    : 'registration.identificationCode';

  const repeatUserNameLabel = isPerson
    ? 'registration.repeatPersonalNumber'
    : 'registration.repeatIdentificationCode';

  const repeatUserNameErrorMsg =
    errors.repeatUserName &&
    t(
      isPerson
        ? 'registration.validRepeatPersonalNumber'
        : 'registration.validRepeatIdentificationCode',
    );

  const firstNameLabel = isPerson
    ? 'registration.firstName'
    : 'registration.name';

  const firstNameErrorMsg =
    errors.firstName &&
    t(isPerson ? 'registration.validFirstName' : 'registration.validName');

  const lastNameLabel = 'registration.lastName';

  const lastNameErrorMsg = errors.lastName && t('registration.validLastName');

  return {
    repeatUserNameErrorMsg,
    repeatUserNameLabel,
    firstNameErrorMsg,
    usernameErrorMsg,
    lastNameErrorMsg,
    firstNameLabel,
    userNameLabel,
    lastNameLabel,
    onSubmitPress,
    control,
    errors,
    watch,
  };
};

export default useSetPersonalInfo;
