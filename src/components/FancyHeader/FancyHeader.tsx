import React from 'react';
import {StyleSheet, View} from 'react-native';
import FancyBackButton from 'components/FancyBackButton';
import Text from 'components/Text';
import {useTranslation} from 'react-i18next';
import DrawerToggle from 'components/DrawerToggle';
import {FancyHeaderFC} from './types';

const FancyHeader: FancyHeaderFC = ({title, style, hideBackButton = false}) => {
  const {t} = useTranslation();
  return (
    <View style={[styles.container, style]}>
      <View style={styles.innerContainer}>
        <FancyBackButton visible={!hideBackButton} />
        <Text
          style={[styles.title, !hideBackButton && styles.titleWithBackButton]}
          capsBold>
          {t(title)}
        </Text>
      </View>
      <DrawerToggle visible />
    </View>
  );
};

export default FancyHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
  },
  titleWithBackButton: {
    marginLeft: 10,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
