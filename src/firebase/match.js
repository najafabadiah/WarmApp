/* Microservice : Match Management
 * */

import {FIREBASE_CONFIG} from './config';

//Firebase initialization
const firebase = require('firebase');
!firebase.apps.length
  ? firebase.initializeApp(FIREBASE_CONFIG)
  : firebase.app();
const db = firebase.firestore();
const geofire = require('geofire-common');

//get Documents within a local region
export async function getDocuments() {
  try {
    // Find matches within 50km of Zurich
    const center = [47.8, 8.5];
    const radiusInM = 50 * 1000;

    // Each item in 'bounds' represents a startAt/endAt pair. We have to issue
    // a separate query for each pair. There can be up to 9 pairs of bounds
    // depending on overlap, but in most cases there are 4.
    const bounds = await geofire.geohashQueryBounds(center, radiusInM);
    const promises = [];
    for (const b of bounds) {
      const q = await db
        .collection('matches')
        .orderBy('geohash')
        .startAt(b[0])
        .endAt(b[1]);
      promises.push(q.get());
    }
    // Collect all the query results together into a single list
    return await Promise.all(promises).then((snapshots) => {
      const matchingDocs = [];
      for (const snap of snapshots) {
        for (const doc of snap.docs) {
          const coordinate = doc.get('coordinate');
          const latitude = coordinate.latitude;
          const longitude = coordinate.longitude;

          // We have to filter out a few false positives due to GeoHash
          // accuracy, but most will match
          const distanceInKm = geofire.distanceBetween(
            [latitude, longitude],
            center,
          );
          const distanceInM = distanceInKm * 1000;
          if (distanceInM <= radiusInM) {
            matchingDocs.push(doc.data());
          }
        }
      }
      return matchingDocs;
    });
  } catch (e) {
    console.log(e);
  }
}
