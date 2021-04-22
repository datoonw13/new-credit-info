import React from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import * as SVG from 'assets/svg';
import Text from 'components/Text';
import {useTranslation} from 'react-i18next';
import {colors} from 'theme';

const Notifications: NotificationsFC = ({show}) => {
  const {t} = useTranslation();

  if (show === false) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.iconWrapper}>
          <SVG.Notification />
        </View>
        <Text style={styles.text}>{t('drawer.notifications')}</Text>
      </View>
      <View style={styles.badgeWrapper}>
        <Text style={styles.badge}>2</Text>
      </View>
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
  badgeWrapper: {
    backgroundColor: colors.crimson,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'android' ? 4 : 5,
    borderRadius: 15,
  },
  badge: {
    color: colors.white,
    marginBottom: 1,
  },
});
