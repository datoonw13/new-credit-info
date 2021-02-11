import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {translate} from '../../services/localizeService';
import {BLACK, BLUE, GRAY6, GRAY3, GRAY4, WHITE} from '../../theme/colors';
import {FIRAGO_BOLD, FIRAGO_REGULAR} from '../../theme/fonts';
import AuthHeader from '../../components/auth/AuthHeader';
import PinLine from '../../components/auth/PinLine';
import PinKeyboard from '../../components/auth/PinKeyboard';

const width = Dimensions.get('window').width;

const SignInPass = ({navigation}) => {
  const dispatch = useDispatch();
  const [pinFillNumber, setPinFillNumber] = useState(0);
  const onPinKeyboardPress = (value) => {
    if (value === 'finger print') {
      // fingerprint
    } else if (value === 'back') {
      if (pinFillNumber !== 0) {
        setPinFillNumber(pinFillNumber - 1);
      }
    } else {
      if (pinFillNumber !== 6) {
        setPinFillNumber(pinFillNumber + 1);
      } else {
        // login request
      }
    }
  };

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <AuthHeader />
        <View style={styles.wrapper}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.nameText}> სახელი გვარი </Text>
            <Text style={styles.otherUserText}>{translate('OTHER_USER')}</Text>
          </View>
          <View style={styles.levelsContainer}>
            <View style={styles.firstLevel} />
            <View style={styles.secondLevel} />
            <View style={styles.thirdLevel} />
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
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: GRAY6,
  },
  wrapper: {
    flex: 1,
    backgroundColor: WHITE,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: FIRAGO_BOLD,
    fontSize: 18,
    color: BLACK,
  },
  otherUserText: {
    marginTop: 22,
    color: BLUE,
    fontSize: 12,
    fontFamily: FIRAGO_REGULAR,
  },
  levelsContainer: {
    height: 20,
    alignItems: 'center',
  },
  firstLevel: {
    height: 40,
    backgroundColor: GRAY4,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    position: 'absolute',
    top: 0,
    width: width - 60,
  },
  secondLevel: {
    height: 40,
    backgroundColor: GRAY3,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    position: 'absolute',
    top: 10,
    width: width - 30,
  },
  thirdLevel: {
    height: 40,
    backgroundColor: WHITE,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    position: 'absolute',
    top: 20,
    width: width,
  },
  mainAreaWrapper: {
    flex: 1,
    backgroundColor: GRAY6,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 28,
  },
  enterPinText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: FIRAGO_REGULAR,
    color: BLACK,
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
