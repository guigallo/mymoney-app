import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { signIn } from './auth/withEmail';
import { fireapp } from './config/firebase';
import { save, getAll, getById } from './database/firestore';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }

    fireapp.auth().onAuthStateChanged(user => {
      if (user != null) {
        const {email, uid} = user;
        this.setState({ user: { email, uid } });

        save(this.state.user, 'categories', { name: 'categoria 5'}).then(result => console.log(result));
        //getAll(this.state.user, 'categories').then(result => console.log(result));
        //getById('categories', 'Transporte').then(result => console.log(result));
        //save(this.state.user, 'categories', { name: 'categoria 99'}, 'YKtCCoGbmCIYUYzIxXM8').then(result => console.log(result));
        //
      }
    });

    signIn('guilherme.gg1@hotmail.com', '123456');

    /*
    firestore.collection('categories').get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, " => ", doc.data());
        });
      });*/
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.user !== null && (
          <>
            <Text>{this.state.user.email}</Text>
            <Text>{this.state.user.uid}</Text>
          </>
        )}
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
