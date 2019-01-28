import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function Index({ todos, firebase }) {
  console.log(this.state)
  if (!isLoaded(todos)) {
    return <View>
      <Text>loading</Text>
    </View>
  }
  if (isEmpty(todos)) {
    return <View>
      <Text>empty</Text>
    </View>
  }
  return (
    <View>
      <Text>txt</Text>
    </View>
  )
}

export default compose(
  firestoreConnect(() => ['categories']), // or { collection: 'todos' }
  connect((state, props) => ({
    categories: state.firestore.categories,
    // profile: state.firebase.profile // load profile
  }))
)(Index)