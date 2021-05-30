/**
 * Depending on a navigation token different navigation routes are open.
 * https://blog.logrocket.com/how-to-set-up-email-authentication-with-react-native-react-navigation-and-firebase/
 */

import React, {useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

import Loading from '../../components/Loader';
import AuthStack from './AuthStack';
import TabStack from '../TabStack';

import {AuthContext} from '../../firebase/authentification';
import {NavigationContainer} from '@react-navigation/native';

export default function IsLogged() {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  // Handle user state changes
  function onAuthStateChanged(userx) {
    setUser(userx);
    setLoading(false);
  }
  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged); // unsubscribe on unmount
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {user ? <TabStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
