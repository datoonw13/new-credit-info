import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from 'components';
import * as SVG from 'assets/svg';
import {dummyData} from './config';
import {colors} from 'theme';
import {useSelector} from 'react-redux';
import {selectUser} from 'store/select';

const UserAccount = () => {
  const {name, lastName} = useSelector(selectUser)!;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={{uri: dummyData.image}} style={styles.image} />
        <Text style={styles.username}>{`${name} ${lastName}`}</Text>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.actionWrapper}>
          <SVG.Delete />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionWrapper, styles.actionDistance]}>
          <SVG.Camera />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserAccount;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 22,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 62,
    height: 62,
    borderRadius: 20,
  },
  username: {
    marginLeft: 18,
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionWrapper: {
    width: 32,
    height: 32,
    backgroundColor: colors.blackOp1,
    borderRadius: 11,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionDistance: {
    marginLeft: 12,
  },
});
