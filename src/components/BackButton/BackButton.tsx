import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Arrow} from 'assets/svg';
import Text from 'components/Text';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {BackButtonFC} from './types';

const BackButton: BackButtonFC = ({style}) => {
  const {t} = useTranslation();
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={goBack}
      hitSlop={styles.hitSlop}>
      <Arrow height={9} width={5} />
      <Text style={styles.text} caps>
        {t('back')}
      </Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  hitSlop: {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  },
  text: {
    marginLeft: 8,
    fontSize: 12,
  },
});
