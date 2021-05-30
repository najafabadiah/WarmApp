import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import MatchInfo from '../components/MatchInfo';
import times from 'lodash.times';
import MatchParticipant from '../components/Buttons/MatchParticipant';

const styles = StyleSheet.create({
  Container: {
    paddingTop: 10,
    paddingBottom: 20,
    padding: 25,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },

  info: {
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  text: {
    fontSize: 18,
    padding: 5,
    color: 'rgba(0, 0, 0, 0.9)',
  },

  participants: {
    height: '80%',
    marginTop: 5,
  },

  player: {
    height: '80%',
    alignSelf: 'flex-start',
  },
});

const MatchInformation = ({route, navigation}) => {
  const {
    age_range,
    date_time,
    match_level,
    p_short_names,
    max_participants,
  } = route.params;

  const renderInfo = () => {
    const date = date_time.toDate();
    const dateToPass =
      date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    const hourToPass = date.getHours() + '.' + date.getMinutes();
    const ageToPass = age_range[0] + '-' + age_range[1];
    return (
      <>
        <MatchInfo icon={'calendar-outline'} text={dateToPass} />
        <MatchInfo icon={'time-outline'} text={hourToPass} />
        <MatchInfo icon={'star-outline'} text={match_level} />
        <MatchInfo icon={'body-outline'} text={ageToPass} />
      </>
    );
  };

  const numpartToPass = p_short_names.length;
  const maxpartToPass = numpartToPass + '/' + max_participants;

  function navigate(index) {
    var toPass = p_short_names[index].sofifa_id;
    return navigation.navigate('MapStack', {
      screen: 'RenderedExtProfile',
      params: {num: toPass},
    });
  }

  return (
    <View style={styles.Container}>
      <View style={styles.info}>{renderInfo()}</View>
      <View style={styles.title}>
        <Text style={styles.text}>Participants</Text>
        <View style={styles.number}>
          <Text style={styles.text}>{maxpartToPass}</Text>
        </View>
      </View>
      <View style={styles.participants}>
        {times(numpartToPass).map((i) => (
          <MatchParticipant
            style={styles.player}
            key={i}
            title={p_short_names[i].user_name}
            onPress={() => navigate(i)}
          />
        ))}
      </View>
    </View>
  );
};

export default MatchInformation;
