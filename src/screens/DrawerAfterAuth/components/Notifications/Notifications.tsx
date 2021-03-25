import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import * as SVG from 'assets/svg';
import Text from 'components/Text';
import {useTranslation} from 'react-i18next';
import {colors} from 'theme';

const Notifications = () => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.iconWrapper}>
          <SVG.Notification />
        </View>
        <Text style={styles.text}>{t('drawer.notifications')}</Text>
      </View>
      <Text style={styles.badge}>2</Text>
    </TouchableOpacity>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    backgroundColor: colors.blackOp1,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 18,
    marginTop: 22,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    height: 38,
    width: 38,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    marginRight: 15,
    backgroundColor: colors.crimsonOp1,
  },
  text: {
    letterSpacing: 0.2,
  },
  badge: {
    backgroundColor: colors.crimson,
    color: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
  },
});
