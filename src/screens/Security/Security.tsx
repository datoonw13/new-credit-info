import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {BaseHeader, ListItem, Divider} from 'components';
import {menuList} from './config';
import useSecurity from './useSecurity';

const Security = () => {
  const {passcodeSwitchValue, onPasscodeSwitchOff} = useSecurity();

  return (
    <SafeAreaView style={styles.container}>
      <BaseHeader title="security.title" />
      <View style={styles.menuWrapper}>
        {menuList.map(
          ({
            id,
            Icon,
            color,
            title,
            onPress,
            switcher,
            onSwitch,
            dividerWidth,
          }) => {
            const switchValue = [passcodeSwitchValue, false, false, false][id];
            const offSwitch = [onPasscodeSwitchOff, null, null, null][id];

            return (
              <View key={id}>
                <ListItem
                  Icon={Icon}
                  color={color}
                  title={title}
                  onPress={onPress}
                  switcher={switcher}
                  onSwitch={onSwitch}
                  offSwitch={offSwitch}
                  switchValue={switchValue}
                />
                <Divider width={dividerWidth} />
              </View>
            );
          },
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
