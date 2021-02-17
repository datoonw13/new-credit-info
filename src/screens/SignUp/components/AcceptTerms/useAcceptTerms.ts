import {useState} from 'react';
import notificationService from 'services/notificationService';
import {
  setRegisterSelectedStepAction,
  acceptAgreementAction,
} from 'store/ducks/authDuck';
import {useDispatch} from 'react-redux';

const useAcceptTerms = ({lastStep}: AcceptTermsProps) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(lastStep !== 5);

  const onSubmit = () => {
    if (!checked) {
      notificationService.notify(
        'error',
        'შეცდომ!',
        'გთხოვთ დაეთანხმოთ წესებს და პირობებს',
      );
      return;
    }
    if (lastStep === 5) {
      dispatch(acceptAgreementAction());
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
