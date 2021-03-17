import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import * as colors from 'theme/colors';
import {BaseHeader} from 'components';
import {PinKeyboard, PinLine} from './components';
import {useTranslation} from 'react-i18next';

const SignInPass = () => {
  const {t} = useTranslation();
  const [pinNumber, setPinNumber] = useState(0);

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView />
      <BaseHeader />
      <View style={styles.wrapper}>
        <View style={styles.mainAreaWrapper}>
          <Text style={styles.enterPinText}>შეიყვანეთ პინი</Text>
          <View style={styles.pinWrapper}>
            <PinLine fillNumber={pinNumber} />
          </View>
          <View style={styles.pinKeyboardWrapper}>
            <PinKeyboard onPress={setPinNumber} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.GRAY6,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: 79,
    height: 79,
    borderRadius: 40,
  },
  mainAreaWrapper: {
    flex: 1,
    backgroundColor: colors.GRAY6,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 28,
  },
  enterPinText: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.black,
  },
  pinWrapper: {
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pinKeyboardWrapper: {
    paddingTop: 22,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SignInPass;
