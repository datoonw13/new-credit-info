import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import * as colors from 'theme/colors';
import {PinKeyboard, PinLine, BaseHeader} from 'components';
import {useTranslation} from 'react-i18next';

const SignInPass = () => {
  const {t} = useTranslation();
  const [pinFillNumber, setPinFillNumber] = useState(0);
  const onPinKeyboardPress = (value) => {};

  return (
    <ScrollView style={styles.scrollView}>
      <BaseHeader />
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.nameText}> სახელი გვარი </Text>
          <Text style={styles.otherUserText}>{t('OTHER_USER')}</Text>
        </View>

        <View style={styles.mainAreaWrapper}>
          <Text style={styles.enterPinText}>შეიყვანეთ პინი</Text>
          <View style={styles.pinWrapper}>
            <PinLine fillNumber={pinFillNumber} />
          </View>
          <View style={styles.pinKeyboardWrapper}>
            <PinKeyboard onPress={onPinKeyboardPress} />
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
  titleWrapper: {
    marginTop: 12,
    marginBottom: 39,
    alignItems: 'center',
    flexDirection: 'column',
  },
  nameText: {
    fontSize: 18,
    color: colors.black,
  },
  otherUserText: {
    marginTop: 22,
    color: colors.blue,
    fontSize: 12,
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
