import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator, withNavigation } from "react-navigation";
import { StyleSheet, Text, View, Button, Platform, StatusBar } from 'react-native';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux'
import { connect } from 'react-redux'
import ReduxProvider from './data/redux';
import SignIn from './screens/SignIn';
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import AuthStack from './navigation/AuthStack'
import AppStack from './navigation/AppStack'



/*
const ennhanceAuth = ({firebase, auth}) =>
  auth.hasOwnProperty('uid')
    ? <AppStack />
    : <SignIn />

const App = compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }))
)(ennhanceAuth)
*/

const App = createAppContainer(createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },{
    initialRouteName: 'AuthLoading',
  }
))

export default PureApp = () =>  {
  return <ReduxProvider>
    <View style={styles.container}> 
      <App />
    </View>
  </ReduxProvider>
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
//style={styles.container}>