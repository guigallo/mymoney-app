import React from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import { Container, Content, Text, ListItem } from 'native-base'
import { withNavigation } from 'react-navigation'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { compose, withHandlers } from 'recompose'
import Header from '../components/layout/Header'
import Separator from './Separator'

const ListCollection = ({
  list, name, collumns, onPressItem, onPressCreate, RenderItem
}) => {
  const listToShow = []
  let message = ''
  !isLoaded(list)
    ? message = 'Loading'
    : isEmpty(list)
      ? message = `${name} list is empty`
      : Object.keys(list).map(
        key => listToShow.push({ ...list[key], key}) )

  return <Container>
    <Header
      title={name}
      create={{
        show: true,
        action: onPressCreate
      }}
    />

    <Content padder>
      {(!isLoaded(list) || isEmpty(list)) 
        ? <Text>{message}</Text>
        : <Animated.FlatList
          data={listToShow}
          keyExtractor={item => item.key}
          ItemSeparatorComponent={() => <Separator/>}
          renderItem={({item}) => (
            item.hasOwnProperty(collumns[0]) && <TouchableOpacity
              style={{flex:1, marginLeft: "2%", padding: 15}}
              onPress={() => onPressItem(item)}
            >
              <RenderItem collumns={collumns} item={item}/>
            </TouchableOpacity>
          )}
        />
      }
    </Content>
  </Container>
}

export default compose(
  withNavigation,
  withHandlers({
    onPressItem: ({navigation}) => item => navigation.navigate('Form', {type: 'update', item}),
    onPressCreate: ({navigation}) => () => navigation.navigate('Form', {type: 'create'}),
  })
)(ListCollection)