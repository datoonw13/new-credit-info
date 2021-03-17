import React from 'react';
import {StyleSheet, View} from 'react-native';
import BackButton from 'components/BackButton';
import Text from 'components/Text';
import {useTranslation} from 'react-i18next';

const BaseHeader: BaseHeaderFC = ({title}) => {
  const {t} = useTranslation();
  return (
    <View style={[styles.container, !title && styles.backButtonWithoutTitle]}>
      <BackButton style={styles.backButton} />
      {title && (
        <Text style={styles.title} capsBold>
          {t(title)}
        </Text>
      )}
    </View>
  );
};

export default BaseHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    left: 0,
    position: 'absolute',
    top: 3,
  },
  backButtonWithoutTitle: {
    height: 25,
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
  },
});
