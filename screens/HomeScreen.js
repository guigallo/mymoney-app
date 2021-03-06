import React from 'react'
import { StyleSheet, AsyncStorage } from 'react-native'
import { compose, withHandlers, hoistStatics } from 'recompose'
import Header from '../components/layout/Header'
import { signOut } from '../auth/withEmail'
import {
  Container, Content, Button, Text
} from 'native-base'

const HomeScreen = ({onPressSignOut}) => {
  return <Container>
    <Header title={'Mymoney'} />

    <Content padder>
      <Button
        onPress={onPressSignOut}
        full
        primary
      >
        <Text>SignOut</Text>
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