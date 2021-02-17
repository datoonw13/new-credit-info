import {BLACK, GRAY3} from './colors';
import {POPPINS_REGULAR} from './fonts';

const {StyleSheet} = require('react-native');

export const gStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: 75,
    borderRadius: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: GRAY3,
    borderRadius: 18,
    height: 61,
    paddingLeft: 22,
    paddingRight: 22,
    color: BLACK,
    fontFamily: POPPINS_REGULAR,
  },
});
