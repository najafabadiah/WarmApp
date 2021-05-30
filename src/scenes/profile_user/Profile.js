import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {ProfileRadar} from '../../components/Profile/ProfileRadar';
import SeparationTab from '../../components/SeparationTab';
import QuestionEntry from '../../components/QuestionEntry';
import ProfileStats from '../../components/Profile/ProfileStats';
import ProfileTitle from '../../components/Profile/ProfileTitle';

import {useContext} from 'react';
import {PlayerContext} from '../context';
import ButtonSmall from '../../components/Buttons/ButtonSmall';
import {AuthContext} from '../../firebase/authentification';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: '#f0f0f0',
  },
  top: {
    paddingTop: 15,
    paddingLeft: 15,
    height: '40%',
    flexDirection: 'row',
  },
  bar: {
    height: '5%',
  },

  bottom: {
    marginTop: 5,
    height: '55%',
  },

  avatar: {
    width: '30%',
    backgroundColor: 'rgba(0,0,0,0.01)',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
  },
  inform: {
    width: '70%',
  },

  title: {
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  },
  stats: {
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  },
});

const Profile = () => {
  const playerData = useContext(PlayerContext);
  const {logout} = useContext(AuthContext);

  const renderTitle = (playerData) => {
    return (
      <ProfileTitle
        name={playerData.short_name}
        position={playerData.player_positions}
      />
    );
  };

  const renderStats = (playerData) => {
    return (
      <View style={styles.stats}>
        <ProfileStats title={'Matches'} number={playerData.matches} />
        <ProfileStats dts title={'Overall'} number={playerData.overall} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.avatar} />
        <View style={styles.inform}>
          <View style={styles.title}>{renderTitle(playerData)}</View>
          <ButtonSmall
            onPress={() => logout()}
            title={'log out'}
            styleC={{marginTop: 30, marginLeft: 20, width: '75%'}}
          />
          <View style={styles.stats}>{renderStats(playerData)}</View>
        </View>
      </View>
      <View style={styles.bar}>
        <SeparationTab />
      </View>
      <View style={styles.bottom}>
        <QuestionEntry text={'Skills set'} />
        <ProfileRadar playerData={playerData} />
      </View>
    </View>
  );
};

export default Profile;
