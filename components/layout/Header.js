import React from 'react'
import { View } from 'react-native'
import { Constants } from 'expo'
import { withNavigation } from 'react-navigation'
import { compose, withHandlers } from 'recompose'
import {
  Header, Left, Body, Right, Button, Icon, Title
} from 'native-base'

CustomHeader = ({navigation, title, onPressBack, onPressMenu}) => {
  return <>
    <View style={{height: Constants.statusBarHeight}} />
    <Header>
      <Left>
        {navigation.state.params
          ? <Button transparent onPress={onPressBack} >
              <Icon name='arrow-back' />
            </Button>
          : <Button transparent onPress={onPressMenu} >
              <Icon name='menu' />
            </Button>
        }
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  </>
}

export default compose(
  withNavigation,
  withHandlers({
    onPressBack: ({navigation}) => () => navigation.pop(),
    onPressMenu: ({navigation}) => () => navigation.openDrawer(),
  })
)(CustomHeader)