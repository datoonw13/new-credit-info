import {createRef, useRef} from 'react';
import {FlatList} from 'react-native';

const useListSelector = ({data, onSelect, activeElement}: UseListSelector) => {
  const listSelectorRef = useRef<FlatList<number>>();

  const onPressSelect = (item: number) => {
    onSelect(item);
    setTimeout(() => {
      listSelectorRef.current?.scrollToItem({
        item: item,
        animated: true,
      });
    }, 100);
  };
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
