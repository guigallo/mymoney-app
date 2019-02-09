import React from 'react'
import { FlatList, Animated } from 'react-native'
import {
  Container, Body, Content, Button, Card, CardItem, Text, List, ListItem
} from 'native-base'
import Header from '../components/layout/Header'
import { signOut } from '../auth/withEmail'
import { withNavigation } from "react-navigation";
import { connect } from 'react-redux'
import { firestoreConnect, populate, isLoaded, isEmpty, withFirestore, firebaseConnect } from 'react-redux-firebase'
import {
  compose,
  withHandlers,
  lifecycle,
  withContext,
  getContext,
  withState
} from 'recompose'
import withCategories from '../hooks/withCategories';

const CategoriesScreen = ({categories, search, setSearch}) => {
  const categoriesList = []
  let message = ''
  !isLoaded(categories)
    ? message = 'Loading'
    : isEmpty(categories)
      ? message = 'Categories list is empty'
      : Object.keys(categories).map(
          key => categoriesList.push({ ...categories[key], key}) )

  return <Container>
    <Header title={'Categories'} />

    <Content>
      {(!isLoaded(categories) || isEmpty(categories)) 
        ? <Text>{message}</Text>
        : <Animated.FlatList
          data={categoriesList}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <ListItem>
              <Text>{ item.name }</Text>
            </ListItem>
          )}
        />
      }
    </Content>
  </Container>
}

export default compose(
  withNavigation,
  withState('search', 'setSearch', ''),
  connect(({ firebase: { auth } }) => ({ auth })),
  firestoreConnect(({ auth, search }) => {
    const query = [['author_id', '==', auth.uid]];
    search === '' ? null : query.push(['name', '==', search])

    return [{
      collection: 'categories',
      where: query,
      //orderBy: ['name', 'asc'],
      storeAs: 'allCategories',
    }]
  }),
  connect(({ firestore }) => ({ categories: firestore.data.allCategories })),
)(CategoriesScreen)