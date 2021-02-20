import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {
  getCostumerInfoAction,
  setRegisterLastStepAction,
  setRegisterSelectedStepAction,
  updateRegisterDataAction,
} from 'store/ducks/authDuck';

const useSetPersonalInfo = ({registerData, lastStep}: SetPersonalInfoProps) => {
  const dispatch = useDispatch();
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
        dispatch(getCostumerInfoAction(0));
      }
    }
  }, [dispatch, registerData]);

  const onSubmit = (data: any = null) => {
    console.log('aq shemodis?');
    if (lastStep === 2) {
      dispatch(updateRegisterDataAction(data));
      dispatch(setRegisterLastStepAction(3));
      dispatch(setRegisterSelectedStepAction(3));
    } else {
      dispatch(setRegisterSelectedStepAction(3));
    }
  };

  return {
    onSubmit,
    handleSubmit,
    control,
    errors,
    watch,
  };
};

export default useSetPersonalInfo;
