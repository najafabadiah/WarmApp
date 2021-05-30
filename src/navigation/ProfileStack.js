/**
 * The Profile Navigation stack for the Drawer navigation
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RenderedProfile from '../scenes/profile_user/RenderedProfile';
import {useContext} from 'react';
import {AuthContext} from '../firebase/authentification';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const ProfileStack = () => {
  const {logout} = useContext(AuthContext);
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="RenderedProfile"
        drawerContent={() => {
          return (
            <DrawerContentScrollView>
              <DrawerItem label="Logout" onPress={() => logout()} />
            </DrawerContentScrollView>
          );
        }}>
        <Drawer.Screen
          name={'RenderedProfile'}
          children={() => <RenderedProfile />}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default ProfileStack;
