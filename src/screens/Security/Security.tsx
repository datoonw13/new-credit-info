import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {BaseHeader, ListItem, Divider} from 'components';
import useSecurity from './useSecurity';
import {menuList} from './config';

const Security = () => {
  const {
    navigateToChangePassword,
    navigateToSetFingerprint,
    fingerprintSwitchValue,
    onFingerprintSwitchOff,
    navigateToSetPasscode,
    passcodeSwitchValue,
    onPasscodeSwitchOff,
  } = useSecurity();

  return (
    <SafeAreaView style={styles.container}>
      <BaseHeader title="security.title" />
      <View style={styles.menuWrapper}>
        {menuList.map(({id, Icon, color, title, switcher, dividerWidth}) => {
          const onPress = [null, null, navigateToChangePassword, null][id];

          const switchValue = [
            passcodeSwitchValue,
            fingerprintSwitchValue,
            false,
            false,
          ][id];
          const offSwitch = [
            onPasscodeSwitchOff,
            onFingerprintSwitchOff,
            null,
            null,
          ][id];
          const onSwitch = [
            navigateToSetPasscode,
            navigateToSetFingerprint,
            undefined,
            undefined,
          ][id];

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
        })}
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
