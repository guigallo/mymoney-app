import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { signIn } from './auth/withEmail';
import { fireapp } from './config/fireBase'

export default class App extends React.Component {
  render() {
    /*
    firestore.collection('categories').get()
      .then(querySnapshot => {
        console.warn(querySnapshot)
      })*/
      
    signIn('guilherme.gg1@hotmail.com', '123456')
      .then(user => {
      });

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
