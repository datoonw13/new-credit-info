import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  resetRegisterDataAction,
  setRegisterSelectedStepAction,
} from 'store/ducks/authDuck';

const useRegister = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const {registerSelectedStep, registerLastStep, registerData} = useSelector(
    (state) => state.authReducer,
  );

  useEffect(() => {
    return () => {
      dispatch(resetRegisterDataAction());
    };
  }, [dispatch]);

  const footerHandler = () => {
    registerSelectedStep === 1
      ? navigate('Register')
      : dispatch(setRegisterSelectedStepAction(registerSelectedStep - 1));
  };

  return {
    registerSelectedStep,
    registerLastStep,
    footerHandler,
    registerData,
  };
};

export default useRegister;
