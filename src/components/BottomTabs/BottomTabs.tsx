import React from 'react';
import {BottomTabItem} from './components';
import Text from 'components/Text';
import {itemList} from './config';
import {Image, View} from 'react-native';

const BottomTabs = () => {
  return (
    <View>
      {itemList.map(({InactiveIcon}) => (
        <InactiveIcon width={22} height={22} />
      ))}
    </View>
  );
};

export default BottomTabs;
