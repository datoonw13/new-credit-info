import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'theme';
import {BottomTabItem} from './components';
import {itemList} from './config';

const BottomTabs = () => {
  return (
    <View style={styles.container}>
      {itemList.map(({ActiveIcon, InactiveIcon, id, navigate, screen}) => (
        <BottomTabItem
          BottomTabActiveIcon={ActiveIcon}
          BottomTabInactiveIcon={InactiveIcon}
          navigate={navigate}
          screen={screen}
          key={id}
        />
      ))}
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingBottom: 30,
    borderRadius: 33,
    marginHorizontal: 10,
  },
});
