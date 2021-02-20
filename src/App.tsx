import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import Loader from './components/Loader/Loader';
import DropdownAlert from 'react-native-dropdownalert';
import Navigation from './navigation';
import {ThemeProvider} from 'react-native-elements';
import {theme} from './services/theme';
import {setDropdownRef} from './services/notificationService';
import * as colors from 'theme/colors';
import 'utils/localization/config';

export let loaderRef;

enableScreens();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <View style={styles.statusBar}>
          <StatusBar backgroundColor={colors.black} barStyle="light-content" />
        </View>
        <Navigation />
        <Loader ref={(ref) => (loaderRef = ref)} />
        <DropdownAlert
          updateStatusBar={false}
          closeInterval={3000}
          ref={(ref) => setDropdownRef(ref)}
        />
      </ThemeProvider>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: colors.black,
  },
});

export default App;
