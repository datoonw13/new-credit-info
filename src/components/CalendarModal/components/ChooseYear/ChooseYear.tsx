import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import Text from 'components/Text';
import {colors} from 'theme';
import {config} from 'utils';
import {choosableYears} from './config';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ChooseYear: ChooseYearFC = ({activeYear = 2002, visible, chooseYear}) => {
  const {t} = useTranslation();
  return (
    <View style={[styles.container, visible && styles.containerVisible]}>
      <Text style={styles.chooseYearText}>{t('registration.chooseYear')}</Text>
      <FlatList
        data={choosableYears}
        scrollEnabled
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.selectItem}
            onPress={() => chooseYear(item)}>
            <Text>{item.toString()}</Text>
            <View
              style={[
                activeYear === item && styles.chooseIconActive,
                styles.chooseIcon,
              ]}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.selectContainer}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
};

export default ChooseYear;

const styles = StyleSheet.create({
  container: {
    display: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
    width: config.mobileWidth,
    height: '100%',
    backgroundColor: colors.white,
    marginTop: 30,
    zIndex: 1,
  },
  containerVisible: {
    display: 'flex',
  },
  chooseYearText: {
    textAlign: 'center',
    marginTop: 10,
  },
  selectContainer: {
    paddingHorizontal: '20%',
  },
  selectItem: {
    borderBottomColor: colors.blackOp2,
    borderBottomWidth: 1,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chooseIcon: {
    marginRight: 5,
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: colors.blackOp5,
    borderRadius: 10,
  },
  chooseIconActive: {
    backgroundColor: colors.green,
  },
});
