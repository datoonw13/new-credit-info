import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectAuth} from 'store/select';
import {useTranslation} from 'react-i18next';
import {
  LanguageSwitcher,
  HeaderWithLogo,
  ListItem,
  Divider,
  Text,
} from 'components';
import {UserAccount, Notifications} from './components';
import {menuList} from './config';

const DrawerAfterAuth = () => {
  const {authStatus} = useSelector(selectAuth);
  const {t} = useTranslation();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View>
        <HeaderWithLogo mode="WithMenu" />
        <Text style={styles.heading}>{t('settings')}</Text>
        <UserAccount />
        <Notifications show={authStatus === 'FULL_ACCESS'} />
        <View style={styles.drawerMenu}>
          {menuList.map(({id, Icon, color, title, dividerWidth, onPress}) => (
            <View key={id}>
              <ListItem
                Icon={Icon}
                color={color}
                title={title}
                onPress={onPress}
              />
              <Divider width={dividerWidth} />
            </View>
          ))}
        </View>
      </View>
      <LanguageSwitcher style={styles.languageSwitcher} />
      <SafeAreaView />
    </ScrollView>
  );
};

export default DrawerAfterAuth;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 28,
    textTransform: 'uppercase',
  },
  drawerMenu: {
    marginTop: 22,
    marginHorizontal: 20,
  },
  languageSwitcher: {
    marginHorizontal: 20,
  },
});
