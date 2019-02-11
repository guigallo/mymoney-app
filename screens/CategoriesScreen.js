import React from 'react'
import { FlatList, Animated, TouchableOpacity } from 'react-native'
import {
  Container, Body, Content, Button, Card, CardItem, Text, List, ListItem, View, Left, Right, Icon
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
  withState,
  hoistStatics
} from 'recompose'
import withCategories from '../hooks/withCategories';

const CategoriesScreen = ({categories, search, setSearch, navigation, onPressView, onPressEdit}) => {
  const categoriesList = []
  let message = ''
  !isLoaded(categories)
    ? message = 'Loading'
    : isEmpty(categories)
      ? message = 'Categories list is empty'
      : Object.keys(categories).map(
        key => categoriesList.push({ ...categories[key], key}) )

  return <Container>
    <Header title='Categories'/>
    <Content>
      {(!isLoaded(categories) || isEmpty(categories)) 
        ? <Text>{message}</Text>
        : <Animated.FlatList
          data={categoriesList}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <ListItem>
              <Left>
                <TouchableOpacity onPress={() => onPressView(item)}>
                  <Text>{ item.name }</Text>
                </TouchableOpacity>
              </Left>

              <Right>
                <TouchableOpacity onPress={() => onPressEdit(item)}>
                  <Icon name="arrow-forward" />
                </TouchableOpacity>
              </Right>
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
  withHandlers({
    onPressView: () => item => console.log('press left', item),
    onPressEdit: ({navigation}) => item => navigation.navigate('Edit', {item}),
  })
)(CategoriesScreen)