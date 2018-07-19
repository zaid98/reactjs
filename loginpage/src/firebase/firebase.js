import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
    apiKey: "AIzaSyBCJcrSqpSv2dcacj713DKST2pPKP2UHaY",
    authDomain: "loginpage-783d4.firebaseapp.com",
    databaseURL: "https://loginpage-783d4.firebaseio.com",
    projectId: "loginpage-783d4",
    storageBucket: "loginpage-783d4.appspot.com",
    messagingSenderId: "389587700971"
  };
  firebase.initializeApp(config);
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const db = firebase.database();
  const auth = firebase.auth();

  export {
  db,
  auth,
};
