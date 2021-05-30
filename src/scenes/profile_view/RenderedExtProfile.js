import {useContext, useEffect, useState} from 'react';
import {getPlayer} from '../../firebase/player';
import {ExtPlayerProvider, MatchContext} from '../context';

import ExtProfile from './ExtProfile';
import Loader from '../../components/Loader';
import * as React from 'react';

const RenderedExtProfile = ({route, navigation}) => {
  const [token, setToken] = useState('');
  const {num} = route.params;

  useEffect(() => {
    if (!token) {
      getToken(num);
    }
  }, [token, num]);

  const getToken = async (num) => {
    const data = await getPlayer(num);
    setToken(data);
  };
  return (
    <ExtPlayerProvider value={token}>
      {token ? <ExtProfile /> : <Loader />}
    </ExtPlayerProvider>
  );
};

export default RenderedExtProfile;
