/**
 * The user is authentificated
 * Here the home navigation tab is defined
 * It consists of two icons that will start two other navigation routes
 */

import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';
import MapStack from './MapStack';
import ProfileStack from './ProfileStack';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: () => {
          return null;
        },
        tabBarIcon: ({focused, color}) => {
          if (route.name === 'MapStack') {
            return (
              <Ionicons
                name={focused ? 'map-outline' : 'map-outline'}
                size={30}
                color={color}
              />
            );
          } else if (route.name === 'ProfileStack') {
            return (
              <Ionicons
                name={
                  focused ? 'person-circle-outline' : 'person-circle-outline'
                }
                size={30}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#50E2C2',
        inactiveTintColor: 'rgba(0, 0, 0, 0.3)',
        style: {height: 100},
      }}>
      <Tab.Screen name="MapStack" component={MapStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default TabStack;
