import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
//import { compose } from 'redux'
import { firestoreConnect, populate, isLoaded, isEmpty, withFirestore, firebaseConnect } from 'react-redux-firebase'
import {
  compose,
  withHandlers,
  lifecycle,
  withContext,
  getContext
} from 'recompose'
 
const CategoriesScreen = (props) => {
  //const { uid } = props;
  //console.log(uid)
  /*
  firestore
  .get({ collection: 'categories', where: ['author_id', '==', firestore._.authUid] } )
  .then(querySnapshot => {
    const docs = [];
    querySnapshot.forEach(doc => {
      docs.push({ id: doc.id, ...doc.data() })
    });
    console.log(docs)
    return docs;
  })
  .catch(err => console.log(err))*/

  return (
    <View>
      <Text>txt</Text>
    </View>
  )
}

export default compose(
  connect(({ firebase: { auth } }) => ({ auth })),
  firestoreConnect(({ auth }) => [{
    collection: 'categories',
    where: ['userId', '==', auth.uid],
    orderBy: ['askTime', 'desc'],
    storeAs: 'allCategories',
  }]),
  connect((state) =>{ console.log(state); return{
  }})
  /*
  connect(({ firestore }) => {
    console.log(firestore)
    return {}//({ categories: firestore.ordered.allCategories })}
  }),*/
  //connect(({ firestore }) => { console.log(firestore); return ({ categories: firestore.ordered.allCategories })}),
  //firebaseConnect(),
  //connect(({ firebase: { auth } }) => ({ uid: auth.uid })),
)(CategoriesScreen)