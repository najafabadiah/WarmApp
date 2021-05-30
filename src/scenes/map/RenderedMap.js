import {useEffect, useState} from 'react';
import {getDocuments} from '../../firebase/match';
import {MatchProvider} from '../context';
import Map from './Map';
import Loader from '../../components/Loader';
import * as React from 'react';

const RenderedMap = ({navigation}) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    if (!token) {
      getToken();
    }
  }, [token]);

  async function getToken() {
    const data = await getDocuments();
    setToken(data);
  }
  return (
    <MatchProvider value={token}>
      {token ? <Map navigation={navigation} /> : <Loader />}
    </MatchProvider>
  );
};

export default RenderedMap;
