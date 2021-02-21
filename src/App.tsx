import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import DropdownAlert from 'react-native-dropdownalert';
import {ThemeProvider} from 'react-native-elements';
import Navigation from 'navigation';
import {Loader} from 'components';
import theme from 'theme/theme';
import {colors} from 'theme';
import {saveLoaderRef} from 'utils/loader';
import {saveDropdownRef} from 'utils/dropdownAlert';
import 'utils/localization/config';

enableScreens();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <View style={styles.statusBar}>
          <StatusBar
            backgroundColor={colors.black}
            barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          />
        </View>
        <Navigation />
        <Loader ref={saveLoaderRef} />
        <DropdownAlert
          updateStatusBar={false}
          closeInterval={3000}
          ref={saveDropdownRef}
        />
      </ThemeProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: colors.black,
  },
});
