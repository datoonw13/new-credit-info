import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from 'components/Text';
import Divider from 'components/Divider';
import {useTranslation} from 'react-i18next';

const Header: HeaderFC = ({title, visible = false}) => {
  const {t} = useTranslation();

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t(title!)}</Text>
      <Divider width="100%" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
