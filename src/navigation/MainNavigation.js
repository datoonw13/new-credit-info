import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import SideDrawer from '../components/shared/SideDrawer';
import {colors} from '../services/theme';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Menu({navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={{marginRight: 20}}>
      <Icon testID="DrawerIcon" name="menu" size={30} color="black" />
    </TouchableOpacity>
  );
}

const mainScreenOptions = (title, headerRight) => ({
  title,
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: colors.white,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerRight,
});

function mainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Apartments"
        component={MainScreen}
        options={({navigation}) =>
          mainScreenOptions('Main', () => <Menu navigation={navigation} />)
        }
      />
    </Stack.Navigator>
  );
}

function MainStack() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerContent={(props) => <SideDrawer {...props} />}>
      <Stack.Screen name="Main" component={mainNavigator} />
    </Drawer.Navigator>
  );
}

const MainNavigation = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false}}>
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
