import React from 'react'
import { compose } from 'recompose'
import { withNavigation } from 'react-navigation'
import {
  Container, Body, Content, Button, Card, CardItem, Text, List, ListItem, View, Left, Right, Icon
} from 'native-base'
import Header from '../components/layout/Header';

const EditScreen = ({navigation}) => {
  console.log(navigation.getParam('item', null))
  return <Container>
    <Header/>

    <Content>

      <Text>adsf</Text>
    </Content>

  </Container>
}

export default compose(
  withNavigation,
)(EditScreen)