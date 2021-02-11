import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import Loader from './components/shared/Loader';
import DropdownAlert from 'react-native-dropdownalert';
import StartupNavigation from './navigation/StartupNavigation';
import {ThemeProvider} from 'react-native-elements';
import {theme} from './services/theme';
import {setDropdownRef} from './services/notificationService';
import {setI18nConfig} from './services/localizeService';
import * as RNLocalize from 'react-native-localize';

export let loaderRef;

enableScreens();

const App = () => {
  let [, setState] = React.useState();

  React.useEffect(() => {
    setI18nConfig(); // set initial config
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    };
  });

  const handleLocalizationChange = () => {
    setI18nConfig();
    setState({});
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <View style={styles.statusBar}>
          <StatusBar backgroundColor="black" barStyle="light-content" />
        </View>
        <StartupNavigation />
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

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const styles = StyleSheet.create({
  statusBar: {
    // height: STATUSBAR_HEIGHT,
    backgroundColor: 'black',
  },
});

export default App;
