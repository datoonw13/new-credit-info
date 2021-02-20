import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {
  setRegisterSelectedStepAction,
  signUpAction,
} from 'store/ducks/authDuck';

const useSetPassword = ({registerData, lastStep}: SetPasswordProps) => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordScore, setPasswordScore] = useState(0);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(true);
  const {control, handleSubmit, errors, watch} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
  });

  const onSubmit = (data = {}) => {
    console.log({...data, ...registerData});
    if (lastStep === 3) {
      dispatch(
        signUpAction({
          ...data,
          ...registerData,
        }),
      );
    } else {
      dispatch(setRegisterSelectedStepAction(4));
    }
  };

  return {
    setRepeatPasswordVisible,
    repeatPasswordVisible,
    setPasswordVisible,
    setPasswordScore,
    passwordVisible,
    passwordScore,
    handleSubmit,
    onSubmit,
    control,
    errors,
    watch,
  };
};

export default useSetPassword;
