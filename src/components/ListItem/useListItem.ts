import {UseListItem} from './types';

const useListItem = ({offSwitch, onSwitch}: UseListItem) => {
  /**
   * On switch press call passed functions accordingly.
   */
  const onSwitchPress = (value: boolean) => {
    value && onSwitch && onSwitch();
    !value && offSwitch && offSwitch();
  };

  return {
    onSwitchPress,
  };
};

export default useListItem;
