import React from 'react';
import { createAppNavigator, createStackNavigator, SafeAreaView, createAppContainer, createSwitchNavigator, withNavigation } from "react-navigation";
import { StyleSheet, Text, View, Button, Platform, StatusBar } from 'react-native';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux'
import { connect } from 'react-redux'
import ReduxProvider from './data/redux';
import LoadScreen from './screens/LoadScreen'
import AuthStack from './navigation/AuthStack'
import AppStack from './navigation/AppStack'

const App = createAppContainer(createSwitchNavigator({
    LoadScreen: LoadScreen,
    App: AppStack,
    Auth: AuthStack,
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
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
  },
});