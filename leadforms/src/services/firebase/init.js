import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/messaging';

// firebase init goes here
const config = {
  apiKey: "AIzaSyARx-cGzP8c4NQg_6dttTbou5tm86OAbL0",
  authDomain: "phylat-5dc56.firebaseapp.com",
  databaseURL: "https://phylat-5dc56.firebaseio.com",
  projectId: "phylat-5dc56",
  storageBucket: "phylat-5dc56.appspot.com",
  messagingSenderId: "884891562114"
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();

//const functions = firebase.functions();
const settings = {
  timestampsInSnapshots: true,
};
db.settings(settings);

const contactCollection = db.collection('contacts');



export {
  db,
  contactCollection


};