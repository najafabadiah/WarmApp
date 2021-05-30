/**
 * 1st navigation function called
 * wrapped into the authentification provider
 */

import React from 'react';
import {AuthProvider} from '../../firebase/authentification';
import IsLogged from './IsLogged';

export default function Navigation() {
  return (
    <AuthProvider>
      <IsLogged />
    </AuthProvider>
  );
}
