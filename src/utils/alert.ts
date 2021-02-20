import Toast from 'react-native-root-toast';

/**
 * Inform the user about username input.
 */
export const inform = (text: string) => {
  Toast.show(text, {
    textStyle: {
      fontSize: 14,
    },
    containerStyle: {
      bottom: 50,
    },
  });
};
