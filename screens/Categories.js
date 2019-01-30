import React from 'react'
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native'
import { List, ListItem, SearchBar } from 'react-native-elements'
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
 
const CategoriesScreen = ({categories, search, setSearch}) => {
  const categoriesList = []
  let message = ''
  !isLoaded(categories)
    ? message = 'Loading'
    : isEmpty(categories)
      ? message = 'Categories list is empty'
      : Object.keys(categories).map(
          key => categoriesList.push({ ...categories[key], key}) )

  return (!isLoaded(categories) || isEmpty(categories)) 
    ? <Text>{message}</Text>
    : <View>
      <Animated.FlatList
        data={categoriesList}
        keyExtractor={item => item.key}

        ListHeaderComponent={header}
        ItemSeparatorComponent={separator}

        renderItem={({item}) => (
          <ListItem
            title={ item.name }
            containerStyle={{ borderBottomWidth: 0 }}
          />
        )}
      />
    </View>
}

header = () => <SearchBar placeholder="Type Here..." lightTheme round/>

separator = () => (
  <View
    style={{
      height: 1,
      width: "94%",
      backgroundColor: "#CED0CE",
      marginLeft: "3%"
    }}
  />
)

export default compose(
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