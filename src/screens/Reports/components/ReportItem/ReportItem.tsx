import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'components';
import {ReportItemFC} from './types';
import {useTranslation} from 'react-i18next';
import {colors} from 'theme';

const ReportItem: ReportItemFC = ({
  headingIconBg,
  actionIconBg,
  HeadingIcon,
  description,
  ActionIcon,
  heading,
  onPress,
}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View
          style={[styles.headingIconWrapper, {backgroundColor: headingIconBg}]}>
          <HeadingIcon />
        </View>
        <View style={styles.textsWrapper}>
          <Text style={styles.heading}>{t(heading)}</Text>
          <Text style={styles.description}>{t(description)}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.actionIconWrapper, {backgroundColor: actionIconBg}]}
        onPress={onPress}>
        <ActionIcon />
      </TouchableOpacity>
    </View>
  );
};

export default ReportItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
    marginTop: 16,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 3,
  },
  headingIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 2,
    marginRight: 8,
  },
  textsWrapper: {
    flex: 3,
    marginTop: 8,
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
  },
  actionIconWrapper: {
    width: 52,
    height: 32,
    borderRadius: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
