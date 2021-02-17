import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BLACK, GRAY3, GRAY5, RED3, WHITE} from 'theme/colors';
import {FIRAGO_SEMIBOLD} from 'theme/fonts';

const tabs = new Array(5).fill(0).map((el, i) => i + 1);

const RegisterTabs = ({currentStep, handler, lastStep}) => {
  return (
    <View style={styles.container}>
      {tabs.map((el) => (
        <View key={el} style={styles.tabContainer}>
          <TouchableOpacity
            onPress={() => handler(el)}
            style={{
              ...styles.tab,
              borderColor: el < lastStep || el === currentStep ? RED3 : GRAY3,
            }}>
            <Text
              style={{
                ...styles.textStyle,
                opacity: el <= lastStep || el === currentStep ? 1 : 0.3,
              }}>
              {el}
            </Text>
          </TouchableOpacity>
          {el === currentStep ? <View style={styles.indicator} /> : null}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GRAY5,
    height: 55,
    borderRadius: 12,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
    marginTop: 22,
    paddingLeft: 12,
    paddingRight: 12,
  },
  tabContainer: {
    justifyContent: 'space-between',
  },
  tab: {
    width: 35,
    height: 35,
    borderRadius: 35,
    borderWidth: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: BLACK,
    fontFamily: FIRAGO_SEMIBOLD,
    fontSize: 18,
  },
  indicator: {
    height: 5,
    backgroundColor: RED3,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
});

export default RegisterTabs;
