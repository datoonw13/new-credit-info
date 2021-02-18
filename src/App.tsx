import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import Loader from './components/Loader/Loader';
import DropdownAlert from 'react-native-dropdownalert';
import StartupNavigation from './navigation/StartupNavigation';
import {ThemeProvider} from 'react-native-elements';
import {theme} from './services/theme';
import {setDropdownRef} from './services/notificationService';
import {setI18nConfig} from './services/localizeService';
import * as RNLocalize from 'react-native-localize';
import * as colors from 'theme/colors';

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
          <StatusBar backgroundColor={colors.black} barStyle="light-content" />
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

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: colors.black,
  },
});

export default App;
