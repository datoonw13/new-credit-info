import React from 'react';
import {useTranslation} from 'react-i18next';
import Text from 'components/Text';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from 'theme';

const Tab: TabFC = ({title, onPress, rounded, activeDateType, dateType}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        rounded === 'left' && styles.roundedLeft,
        rounded === 'right' && styles.roundedRight,
        dateType === activeDateType && styles.activeTab,
      ]}
      onPress={onPress}>
      <Text style={styles.text}>{t(title)}</Text>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    width: '30%',
    backgroundColor: colors.crimsonOp2,
    borderWidth: 1,
    borderColor: colors.blackOp2,
  },
  roundedLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  roundedRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  activeTab: {
    backgroundColor: colors.crimsonOp4,
  },
  text: {
    textAlign: 'center',
    padding: 5,
  },
});
