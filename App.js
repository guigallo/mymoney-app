import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux'
import { connect } from 'react-redux'
import ReduxProvider from './data/redux';
import Dashboard from './screens/Dashboard';
import SignIn from './screens/SignIn';
import Categories from './screens/Categories';

const ennhanceAuth = ({firebase, auth}) =>
  auth.hasOwnProperty('uid')
    ? <Categories/>
    : <SignIn/>

const App = compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }))
)(ennhanceAuth)

export default PureApp = () =>  {
  return <ReduxProvider>
    <View> 
      <App />
    </View>
  </ReduxProvider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//style={styles.container}>