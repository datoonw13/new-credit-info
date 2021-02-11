import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {logoutAction} from '../../store/ducks/authDuck';
import {useDispatch} from 'react-redux';
import {colors} from '../../services/theme';

const SideDrawer = (props) => {
  const dispatch = useDispatch();
  // const { userData } = useSelector((state) => state.authReducer);
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
      <View>
        <Text
          testID="DisplayName"
          style={{
            fontSize: 30,
            color: 'black',
            alignSelf: 'center',
            marginBottom: 10,
          }}>
          User Name
        </Text>
        {/*<DrawerItem*/}
        {/*  testID='ChangePassword'*/}
        {/*  label="change password"*/}
        {/*  inactiveTintColor='black'*/}
        {/*  labelStyle={{ fontSize: 20 }}*/}
        {/*  icon={() => <Icon color='black' size={20} name='unlock' />}*/}
        {/*  onPress={() => props.navigation.navigate('ChangePassword')}*/}
        {/*/>*/}
      </View>
      <TouchableOpacity
        style={styles.logoutContainer}
        onPress={() => {
          props.navigation.closeDrawer();
          dispatch(logoutAction());
        }}>
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  logoutContainer: {
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 40,
    borderRadius: 10,
    backgroundColor: colors.blue,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 17,
  },
});

export default SideDrawer;
