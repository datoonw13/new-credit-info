import {useState} from 'react';
import {UseListItem} from './types';

const useListItem = ({offSwitch, onSwitch}: UseListItem) => {
  const [switchValue, setSwitchValue] = useState(false);

  /**
   * On switch press call passed functions accordingly.
   */
  const onSwitchPress = (value: boolean) => {
    setSwitchValue(value);
    value && onSwitch && onSwitch();
    !value && offSwitch && offSwitch();
  };

  return {
    switchValue,
    onSwitchPress,
  };
};

export default useListItem;
