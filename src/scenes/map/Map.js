import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {useContext, useState} from 'react';
import AddMatch from '../../components/Buttons/AddMatch';
import {MatchContext} from '../context';
import MatchInformation from '../MatchInformation';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  mapContainer: {
    backgroundColor: 'white',
    paddingTop: 0,
  },
  map: {
    height: 900,
  },

  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  // Character image
  image: {
    width: '100%',
    height: 80,
  },
});

const Map = (props) => {
  const InitialRegion = {
    region: {
      latitude: 47.37,
      longitude: 8.55,
      latitudeDelta: 0.06,
      longitudeDelta: 0.06,
    },
  };

  const matchData = useContext(MatchContext);

  const [region, setRegion] = useState(InitialRegion);
  const navigation = useNavigation();
  function doNothing() {}
  const mapStyle = [{}];
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={region.region}
        onRegionChange={(newRegion) => setRegion(newRegion)}
        showsUserLocation={true}
        zoomEnabled={true}
        customMapStyle={mapStyle}>
        {matchData.map((marker, index) => (
          <MapView.Marker
            key={index}
            coordinate={marker.coordinate}
            onPress={() =>
              navigation.navigate('MapStack', {
                screen: 'MatchInformation',
                params: {
                  age_range: marker.age_range,
                  date_time: marker.date_time,
                  match_level: marker.match_level,
                  p_short_names: marker.p_short_names,
                  max_participants: marker.max_participants,
                },
              })
            }
          />
        ))}
      </MapView>
      <View
        style={{position: 'absolute', top: 0, right: 0, alignSelf: 'center'}}>
        <AddMatch
          title={'+'}
          styleC={{marginTop: 70, marginRight: 10, backgroundColor: 'grey'}}
          onPress={() => doNothing}
        />
      </View>
    </View>
  );
};

export default Map;
