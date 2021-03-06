import React from 'react';
import {FlatList, View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from 'components/Text';
import {colors} from 'theme';
import useListSelector from './useListSelector';

const ListSelector: ListSelectorFC = ({activeElement, data, onSelect}) => {
  const {onPressSelect, sortedData, listSelectorRef} = useListSelector({
    data,
    onSelect,
    activeElement,
  });
  return (
    <FlatList
      data={sortedData}
      scrollEnabled
      renderItem={({item}) => (
        <TouchableOpacity
          style={[
            styles.selectItem,
            activeElement === item && styles.selectedItem,
          ]}
          onPress={() => onPressSelect(item)}>
          <Text>{item.toString()}</Text>
          <View
            style={[
              activeElement === item && styles.chooseIconActive,
              styles.chooseIcon,
            ]}
          />
        </TouchableOpacity>
      )}
      style={styles.selectContainer}
      keyExtractor={(item) => item.toString()}
      ref={listSelectorRef}
    />
  );
};
export default ListSelector;

const styles = StyleSheet.create({
  selectContainer: {
    width: '80%',
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  selectItem: {
    borderBottomColor: colors.blackOp2,
    borderBottomWidth: 1,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
  },
  selectedItem: {
    backgroundColor: colors.strangeBlueOp1,
  },
  chooseIcon: {
    marginRight: 5,
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: colors.blackOp5,
    borderRadius: 10,
  },
  chooseIconActive: {
    backgroundColor: colors.green,
  },
});
