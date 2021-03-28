import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {BaseHeader, ListItem, Divider} from 'components';
import {menuList} from './config';

const Security = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BaseHeader title="security.title" />
      <View style={styles.menuWrapper}>
        {menuList.map(
          ({id, Icon, color, title, dividerWidth, onPress, switcher}) => (
            <View key={id}>
              <ListItem
                Icon={Icon}
                color={color}
                title={title}
                onPress={onPress}
                switcher={switcher}
              />
              <Divider width={dividerWidth} />
            </View>
          ),
        )}
      </View>
    </SafeAreaView>
  );
};

export default Security;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  menuWrapper: {
    marginTop: 22,
    marginHorizontal: 15,
  },
});
