import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, populate, isLoaded, isEmpty, withFirestore } from 'react-redux-firebase'
/*import {
  compose,
  withHandlers,
  lifecycle,
  withContext,
  getContext
} from 'recompose'*/
 
const Categories = ({firestore, categories}) => {
  console.log(firestore)
  console.log(categories)

  return (
    <View>
      <Text>txt</Text>
    </View>
  )
}

const populates = [{ child: 'createdBy', root: 'users' }]
const collection = 'categories'
 
export default compose(
  withFirestore,
  connect(state => ({
    categories: state.firestore.categories
  }))
)(Categories)


//export default withPopulatedProjects