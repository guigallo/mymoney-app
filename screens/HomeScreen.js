import React from 'react'
import { StyleSheet, AsyncStorage } from 'react-native'
import {
  Container, Body, Content, Button, Card, CardItem, Text
} from 'native-base'
import { compose, withHandlers, hoistStatics } from 'recompose';
import Header from '../components/layout/Header'
import { signOut } from '../auth/withEmail'

const HomeScreen = ({onPressSignOut, navigation}) => {
  return <Container>
    <Header title={'Mymoney'} />

    <Content padder>
      <Card>
        <CardItem>
          <Body>
            <Text>Chat App to talk some awesome people!</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Button
            onPress={onPressSignOut}
            full
            primary
          >
            <Text>SignOut</Text>
          </Button>
        </CardItem>
      </Card>
      <Button
        full
        rounded
        dark
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Category")}
      >
        <Text>Chat With People</Text>
      </Button>
      <Button
        full
        rounded
        primary
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <Text>Goto Profiles</Text>
      </Button>
    </Content>
  </Container>
}

HomeScreen.navigationOptions = {
  drawerLabel: 'Home',
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  }
})

export default hoistStatics(compose(
  withHandlers({
    onPressSignOut: ({navigation}) => () =>
      signOut().then(async () => {
        await AsyncStorage.removeItem('authUser')
        navigation.navigate('SignIn')
      })
  })
))(HomeScreen)