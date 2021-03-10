import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {StandardService, PremiumService} from 'assets/svg';
import Text from 'components/Text';
import {colors} from 'theme';
import {useTranslation} from 'react-i18next';

const SwitchServiceButton: SwitchServiceButtonFC = ({
  title,
  active,
  type,
  onPress,
}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={[styles.container, active ? styles.active : {}]}
      onPress={() => onPress(type)}>
      {type === 'PREMIUM' ? (
        <PremiumService width={28} height={17} />
      ) : (
        <StandardService width={22} height={14} />
      )}
      <Text style={active ? styles.activeText : styles.inactiveText}>
        {t(title)}
      </Text>
    </TouchableOpacity>
  );
};

export default SwitchServiceButton;

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
    backgroundColor: colors.white,
  },
  activeText: {
    color: colors.black,
  },
  inactiveText: {
    color: colors.blackOp8,
  },
});
