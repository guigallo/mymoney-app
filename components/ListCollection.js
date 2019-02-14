import React from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import { Container, Content, Text, ListItem, Left, Right, Icon } from 'native-base'
import { withNavigation } from 'react-navigation'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { compose, withHandlers } from 'recompose'
import Header from '../components/layout/Header'

const ListCollection = ({
  list, name, collumns, onPressView, onPressEdit, onPressCreate
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

    <Content>
      {(!isLoaded(list) || isEmpty(list)) 
        ? <Text>{message}</Text>
        : <Animated.FlatList
          data={listToShow}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <ListItem>
              <Left>
                <TouchableOpacity onPress={() => onPressView(item)}>
                  {collumns.map(collumn =>
                    <Text key={collumn}>{ item[collumn] }</Text>
                  )}
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
  withHandlers({
    onPressView: () => item => console.log('press left', item),
    onPressEdit: ({navigation}) => item => navigation.navigate('Form', {type: 'update', item}),
    onPressCreate: ({navigation}) => () => navigation.navigate('Form', {type: 'create'}),
  })
)(ListCollection)