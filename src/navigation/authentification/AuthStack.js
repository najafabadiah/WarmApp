/**
 * The user is not authentificated so the navigation route starts on the Welcome screen
 */

import * as React from 'react';

import Welcome from '../../scenes/authentification/Welcome';
import Register from '../../scenes/authentification/Register';
import SignIn from '../../scenes/authentification/SignIn';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={'Welcome'}
        component={Welcome}
        key={'Welcome'}
        options={{
          title: '',
        }}
      />

      <Stack.Screen
        name={'Register'}
        component={Register}
        key={'Register'}
        options={{
          title: '',
          headerShown: true,
          headerStyle: {backgroundColor: '#f0f0f0f0', shadowColor: 'transparent',},
          headerTintColor: 'rgba(0,0,0,1)',
        }}
      />
      <Stack.Screen
        name={'SignIn'}
        component={SignIn}
        key={'SignIn'}
        options={{
          title: '',
          headerShown: true,
          headerStyle: {backgroundColor: '#f0f0f0f0', shadowColor: 'transparent'},
          headerTintColor: 'rgba(0,0,0,1)',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
