import firebase from 'firebase/app';
require("firebase/firestore");

var config = {
  apiKey: "AIzaSyD6TbeJE3SLuQpdkJrze6KgMy2yQswhqiE",
  authDomain: "mymoney-29eaf.firebaseapp.com",
  projectId: "mymoney-29eaf",
  databaseURL: "https://mymoney-29eaf.firebaseio.com",
  storageBucket: "mymoney-29eaf.appspot.com",
  messagingSenderId: "954524697821"
};

export const fireapp = firebase.initializeApp(config);
export const firestore = fireapp.firestore()