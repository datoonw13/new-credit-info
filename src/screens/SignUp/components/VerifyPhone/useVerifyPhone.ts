import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {checkOTPAction, sendOTPAction} from 'store/ducks/authDuck';

const useVerifyPhone = ({registerData}: VerifyPhoneProps) => {
  const dispatch = useDispatch();
  const {control, handleSubmit, errors} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      phone: registerData.phone ? registerData.phone : '',
      code: '',
    },
  });

  const onSubmit = (data) => {
    if (registerData.phone) {
      dispatch(checkOTPAction(data.code));
    } else {
      dispatch(sendOTPAction(data.phone));
    }
  };

  return {
    handleSubmit,
    onSubmit,
    control,
    errors,
  };
};

export default useVerifyPhone;
