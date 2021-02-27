import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'components';
import {colors} from 'theme';
import {useTranslation} from 'react-i18next';
import {InfoFC} from './types';

const Info: InfoFC = ({text, style, onPress}) => {
  const {t} = useTranslation();
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.iconWrapper} onPress={onPress}>
        <Icon name="information-circle-outline" size={25} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.text}>{t(text)}</Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.blackOp1,
    padding: 10,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    backgroundColor: colors.blackOp1,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    marginLeft: 2.1,
    marginTop: 1,
  },
  text: {
    flexWrap: 'wrap',
    flex: 1,
    fontSize: 14,
  },
});
