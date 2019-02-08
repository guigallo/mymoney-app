import React from 'react'
import { View } from 'react-native'
import {
  Header, Left, Body, Right, Button, Icon, Title
} from 'native-base'
import { Constants } from 'expo'
import { withNavigation } from 'react-navigation'
import { compose } from 'recompose';

CustomHeader = ({navigation}) => {
  return <>
    <View style={{height: Constants.statusBarHeight}} />
    <Header>
      <Left>
        <Button
          transparent
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Home</Title>
      </Body>
      <Right />
    </Header>
  </>
}

export default compose(
  withNavigation,
)(CustomHeader)