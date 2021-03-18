import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Text} from 'components';
import {AccountFC} from './types';
import {colors} from 'theme';

const Account: AccountFC = ({image, user, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.user}>{user}</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.strangeBlueOp05,
    marginHorizontal: 15,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 14,
    marginRight: 8,
  },
  user: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
