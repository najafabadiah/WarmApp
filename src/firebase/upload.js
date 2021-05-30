/* This is just a file that has being used to upload
 * player and match data
 * */

//the configuration is manual because
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBJPbAoRMpnLkqk8xVxJAz0s3Nk2d0dYXs',
  authDomain: 'warmapp-da212.firebaseapp.com',
  databaseURL:
    'https://warmapp-da212-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'warmapp-da212',
  storageBucket: 'warmapp-da212.appspot.com',
  messagingSenderId: '460817676084',
  appId: '1:460817676084:web:38eacfefe0299172ee9761',
  measurementId: 'G-JM6CZWCDH9',
};
const firebase = require('firebase');
!firebase.apps.length
  ? firebase.initializeApp(FIREBASE_CONFIG)
  : firebase.app();
const db = firebase.firestore();
const geofire = require('geofire-common');

async function resetScores() {
  const collection = await db.collection('players').get();
  collection.forEach((doc) => {
    doc.ref.update({
      assigned: 0,
      matches: 0,
    });
  });
  console.log('Finished');
}

async function add() {
  const lat = 47.353704;
  const lng = 8.550842;
  const hash = geofire.geohashForLocation([lat, lng]);

  const res = await db.collection('matches').add({
    age_range: [23, 40],
    coordinate: {
      latitude: lat,
      longitude: lng,
    },
    date_time: '',
    geohash: hash,
    match_level: 'Pro',
    max_participants: 6,
    p_short_names: [
      {
        sofifa_id: 177003,
        user_name: 'L. Modrić',
      },
      {
        sofifa_id: 209331,
        user_name: 'M. Salah',
      },
    ],
  });
  console.log('Finished');
}

add();
