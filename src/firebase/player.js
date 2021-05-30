/* Microservice : Player Management
 * */

import {FIREBASE_CONFIG} from './config';

//Firebase initialization
const firebase = require('firebase');
!firebase.apps.length
  ? firebase.initializeApp(FIREBASE_CONFIG)
  : firebase.app();
const db = firebase.firestore();
const playerRef = db.collection('players');

//get player data
// @params : valid sofifa_id
export async function getPlayer(sofifa_id) {
  try {
    const profileRef = await playerRef
      .where('sofifa_id', '==', sofifa_id)
      .limit(1)
      .get();
    if (profileRef.empty) {
      console.log('No matching documents.');
      return;
    }
    //the only method on firebase documentation to get a single document using a field
    //seem to be to have to query for multiple documents
    const list = [];
    profileRef.forEach((doc) => {
      list.push(doc.data());
    });
    return list[0];
  } catch (e) {
    console.log(e);
  }
}

//add player data
// @params : valid sofifa_id
export async function addPlayer(json) {
  try {
    const profileRef = await playerRef.add(json);
    console.log('Document written with ID: ', profileRef.id);
    return profileRef;
  } catch (e) {
    console.log(e);
  }
}
