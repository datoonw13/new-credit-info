import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  LanguageSwitcher,
  DrawerListItem,
  HeaderWithLogo,
  SocialLinks,
  Divider,
  Text,
} from 'components';
import {menuList} from './config';
import {colors} from 'theme';

const DrawerBeforeAuth = () => {
  return (
    <View style={styles.container}>
      <View>
        <SafeAreaView />
        <HeaderWithLogo mode="Left" style={styles.header} />
        {menuList.map(({id, Icon, color, title, dividerWidth, navigate}) => (
          <View key={id}>
            <DrawerListItem
              Icon={Icon}
              color={color}
              title={title}
              navigate={navigate}
            />
            <Divider width={dividerWidth} />
          </View>
        ))}
      </View>
      <View style={styles.innerBottomContainer}>
        <LanguageSwitcher />
        <Divider width="100%" />
        <Text children="company" style={styles.companyTitle} />
        <Text children="companyAddress" style={styles.companyAddressTitle} />
        <SocialLinks />
        <SafeAreaView />
      </View>
    </View>
  );
};

export default DrawerBeforeAuth;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: Platform.OS === 'android' ? 10 : 0,
  },
  innerBottomContainer: {
    paddingRight: 10,
  },
  header: {
    marginBottom: 34,
  },
  companyTitle: {
    fontSize: 13,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 8,
  },
  companyAddressTitle: {
    fontSize: 12,
    color: colors.blackOp8,
    textAlign: 'center',
    marginBottom: 12,
    height: 32,
  },
});
