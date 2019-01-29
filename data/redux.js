import React from 'react'
import { createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import { fireapp as firebase } from '../config/firebase'
import { ReactReduxFirebaseProvider, firebaseReducer, reactReduxFirebase } from 'react-redux-firebase'
//import { createFirestoreInstance, firestoreReducer, reduxFirestore } from 'redux-firestore'

//firebase.firestore();

const reactNativeFirebaseConfig = {
  debug: true
 };
 
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

// Add firebase and firestor to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  //firestore: firestoreReducer
});

// Create store with reducers and initial state
const initialState = {};
export const store = createStore(
  rootReducer,
  initialState,
  //compose(
    //reactReduxFirebase(firebase, rrfConfig),
    //reduxFirestore(firebase)),
);

export const rrfProps = {
  firebase: firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  //createFirestoreInstance
}

// Setup react-redux so that connect HOC can be used
export default ReduxProvider = ({ children }) => {
  return (<Provider store={ store }>
    <ReactReduxFirebaseProvider { ...rrfProps }>
      {children}
    </ReactReduxFirebaseProvider>
  </Provider>);
}