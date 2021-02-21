import {useState} from 'react';
import {alertError} from 'utils/dropdownAlert';
import {setRegisterSelectedStepAction} from 'store/registration/actions';
import {acceptAgreement} from 'store/registration/sagaActions';
import {useDispatch} from 'react-redux';

const useAcceptTerms = ({lastStep}: AcceptTermsProps) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(lastStep !== 5);

  const onSubmit = () => {
    if (!checked) {
      alertError('შეცდომ!', 'გთხოვთ დაეთანხმოთ წესებს და პირობებს');
      return;
    }
    if (lastStep === 5) {
      dispatch(acceptAgreement());
    }
    dispatch(setRegisterSelectedStepAction(6));
  };

  return {
    checked,
    onSubmit,
    setChecked,
  };
};

export default useAcceptTerms;
