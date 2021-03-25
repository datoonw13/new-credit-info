import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {HeaderWithLogo, Text} from 'components';
import {UserAccount} from './components';

const DrawerAfterAuth = () => {
  const {t} = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <HeaderWithLogo mode="WithMenu" />
      <Text style={styles.heading}>{t('settings')}</Text>
      <UserAccount />
    </ScrollView>
  );
};

export default DrawerAfterAuth;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 28,
    textTransform: 'uppercase',
  },
});
