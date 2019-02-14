import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyD6TbeJE3SLuQpdkJrze6KgMy2yQswhqiE",
  authDomain: "mymoney-29eaf.firebaseapp.com",
  databaseURL: "https://mymoney-29eaf.firebaseio.com",
  projectId: "mymoney-29eaf",
  storageBucket: "mymoney-29eaf.appspot.com",
  messagingSenderId: "954524697821"
};

export const fireapp = firebase.initializeApp(firebaseConfig);