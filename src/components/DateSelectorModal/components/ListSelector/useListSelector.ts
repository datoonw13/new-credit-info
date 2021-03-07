import {useRef} from 'react';
import {FlatList} from 'react-native';

const useListSelector = ({data, onSelect, activeElement}: UseListSelector) => {
  const listSelectorRef = useRef<FlatList<number>>();

  /**
   * On item press select that item and
   * scroll to top.
   */
  const onPressSelect = (item: number) => {
    onSelect(item);
    setTimeout(() => {
      listSelectorRef.current?.scrollToItem({
        item: item,
        animated: true,
      });
    }, 100);
  };

  /**
   * Sort the data so that selected
   * item should be at the top.
   */
  const sortedData = activeElement
    ? [activeElement, ...data.filter((val) => val !== activeElement)]
    : data;

  return {
    sortedData,
    onPressSelect,
    listSelectorRef,
  };
};

export default useListSelector;
