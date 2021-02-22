import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetRegisterDataAction} from 'store/registration/actions';
import {selectRegistration} from 'store/select';

const useRegister = () => {
  const dispatch = useDispatch();
  const {registerSelectedStep, registerLastStep, registerData} = useSelector(
    selectRegistration,
  );

  useEffect(() => {
    return () => {
      dispatch(resetRegisterDataAction());
    };
  }, [dispatch]);

  return {
    registerSelectedStep,
    registerLastStep,
    registerData,
  };
};

export default useRegister;
