import React from 'react'
import { createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
//import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer, reduxFirestore } from 'redux-firestore';
import { fireapp } from '../config/firebase'

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

// Add firebase and firestor to reducers
const rootReducer = combineReducers({
  //firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create stor  s and initial state
const initialState = {};
export const store = createStore(
  rootReducer,
  initialState,
  compose(
    reduxFirestore(fireapp))
);

export const rrfProps = {
  firebase: fireapp,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

// Setup react-redux so that connect HOC can be used
export default ReduxProvider = ({ children }) => {
  return (<Provider store={ store }>
    <ReactReduxFirebaseProvider { ...rrfProps }>
      {children}
    </ReactReduxFirebaseProvider>
  </Provider>);
}