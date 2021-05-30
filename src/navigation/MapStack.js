/**
 * Map Navigation Route
 * The first screen displayed is the Rendered Map
 */

import * as React from 'react';

import RenderedMap from '../scenes/map/RenderedMap';
import MatchInformation from '../scenes/MatchInformation';
import RenderedExtProfile from '../scenes/profile_view/RenderedExtProfile';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const MapStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={RenderedMap}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="RenderedMap"
        children={() => <RenderedMap />}
        options={{
          title: ' ',
        }}
      />

      <Stack.Screen
        name={'MatchInformation'}
        component={MatchInformation}
        key={'MatchInformation'}
        options={{
          title: ' ',
          headerShown: true,
          headerStyle: {backgroundColor: 'rgba(255,255,255,1)'},
          headerTintColor: 'rgba(0,0,0,1)',
        }}
      />

      <Stack.Screen
        name="RenderedExtProfile"
        component={RenderedExtProfile}
        key={'RenderedExtProfile'}
        options={{
          title: '',
          headerShown: true,
          headerStyle: {backgroundColor: '#f0f0f0f0'},
          headerTintColor: 'rgba(0,0,0,1)',
        }}
      />
    </Stack.Navigator>
  );
};

export default MapStack;
