import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {EnglishFlag, GeorgianFlag} from 'assets/svg';
import Text from 'components/Text';
import {colors} from 'theme';
import useLanguageButton from './useLanguageButton';

const LanguageButton: LanguageButtonFC = ({type, active}) => {
  const {changeLanguage} = useLanguageButton(type);
  return (
    <TouchableOpacity
      style={[styles.container, active ? styles.active : {}]}
      onPress={changeLanguage}>
      {type === 'English' ? (
        <EnglishFlag style={styles.flag} width={22} height={14} />
      ) : (
        <GeorgianFlag style={styles.flag} width={22} height={14} />
      )}
      <Text style={active ? styles.activeText : styles.inactiveText}>
        {type}
      </Text>
    </TouchableOpacity>
  );
};

export default LanguageButton;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 42,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  active: {
    backgroundColor: colors.crimson,
  },
  flag: {
    backgroundColor: colors.white,
  },
  activeText: {
    color: colors.white,
  },
  inactiveText: {
    color: colors.blackOp8,
  },
});
