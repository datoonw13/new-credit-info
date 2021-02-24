import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {checkOTP, sendOTP} from 'store/registration/sagaActions';

const useVerifyPhone = ({registerData}: VerifyPhoneProps) => {
  console.log(registerData);
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
      dispatch(checkOTP(data.code));
    } else {
      dispatch(sendOTP(data.phone));
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
