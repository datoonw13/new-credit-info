import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as SVG from 'assets/svg';
import {Text} from 'components';
import {ReportItemFC} from './types';
import {useTranslation} from 'react-i18next';

const ReportItem: ReportItemFC = ({
  ActionIcon,
  HeadingIcon,
  headingIconBg,
  description,
  heading,
}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <HeadingIcon />
        </View>
        <View>
          <Text>{t(heading)}</Text>
          <Text>{t(description)}</Text>
        </View>
      </View>
      <View>
        <ActionIcon />
      </View>
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
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
