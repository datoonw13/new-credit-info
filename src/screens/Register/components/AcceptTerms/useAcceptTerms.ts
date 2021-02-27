import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {alertError} from 'utils/dropdownAlert';
import {setRegisterSelectedStepAction} from 'store/registration/actions';
import {acceptAgreement} from 'store/registration/sagaActions';
import * as service from 'services';

const useAcceptTerms = ({lastStep}: AcceptTermsProps) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(lastStep !== 5);
  const [agreement, setAgreement] = useState<string | undefined>();

  /**
   * Get agreement.
   */
  useEffect(() => {
    (async () => {
      try {
        const {agreement: content} = await service.getCustomerAgreement();
        setAgreement(content);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  /**
   * Accept agreement
   * then go to next step.
   */
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
    agreement,
    setChecked,
  };
};

export default useAcceptTerms;
