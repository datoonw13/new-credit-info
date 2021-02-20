import {useState} from 'react';
import {
  setRegisterLastStepAction,
  setRegisterSelectedStepAction,
  updateRegisterDataAction,
} from 'store/ducks/authDuck';
import {useDispatch} from 'react-redux';

const useChooseEntity = ({customerType, lastStep}: ChooseEntityProps) => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState(customerType);

  const onSubmit = () => {
    if (lastStep === 1) {
      dispatch(updateRegisterDataAction({customerType: selectedType}));
      dispatch(setRegisterLastStepAction(2));
    }
    dispatch(setRegisterSelectedStepAction(2));
  };

  return {
    onSubmit,
    selectedType,
    setSelectedType,
  };
};

export default useChooseEntity;
