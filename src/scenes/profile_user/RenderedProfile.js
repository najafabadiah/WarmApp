import {useEffect, useState} from 'react';
import {getPlayer} from '../../firebase/player';
import {PlayerProvider} from '../context';
import Profile from '../../scenes/profile_user/Profile';
import Loader from '../../components/Loader';
import * as React from 'react';

export const RenderedProfile = ({navigation}) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (!token) {
      getToken();
    }
  }, [token]);

  const getToken = async () => {
    const data = await getPlayer(158023);
    setToken(data);
  };
  return (
    <PlayerProvider value={token}>
      {token ? <Profile /> : <Loader />}
    </PlayerProvider>
  );
};

export default RenderedProfile;
