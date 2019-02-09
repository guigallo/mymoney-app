import React from 'react'
import { withNavigation } from 'react-navigation'
import { StyleSheet, AsyncStorage } from 'react-native'
import {
  Container, Header, Content, Form, Item, Input, Label, Icon, Button, Text, Card, CardItem, Body, Drawer,
} from 'native-base';
import { signIn } from '../auth/withEmail'
import { compose, withProps, withState, withHandlers, hoistStatics } from 'recompose'

const SignIn = ({email, password, onPressSignIn, setEmail, setPassword}) => {
  return <Container style={styles.container}>
    <Content padder>
      <Form>
        <Item floatingLabel>
          <Icon active type='MaterialIcons' name='email' />
          <Label>Username</Label>
          <Input
            autoFocus
            autoCapitalize='none'
            textContentType='emailAddress'
            returnKeyType='next'
            autoComplete='email'
            keyboardType='email-address'

            onSubmitEditing={() => this.passwordInput._root.focus()}
            onChangeText={value => setEmail(value)}
          />
        </Item>

        <Item floatingLabel last>
          <Icon active type='MaterialIcons' name='lock' />
          <Label>Password</Label>
          <Input
            getRef={(input) => this.passwordInput = input}
            autoCapitalize='none'
            textContentType='password'
            returnKeyType='go'
            secureTextEntry={true}

            onSubmitEditing={onPressSignIn}
            onChangeText={value => setPassword(value)}
          />
        </Item>

        <Button block onPress={onPressSignIn} style={styles.button} >
          <Text>SignIn</Text>
        </Button>
      </Form>
    </Content>
  </Container>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: 15,
  }
})

export default compose(
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    onPressSignIn: ({navigation, email, password}) => () => {
      signIn(email, password)
        .then(async result => {
          await AsyncStorage.setItem('authUser', JSON.stringify(result.user))
          navigation.navigate('Dashboard')
        })
        .catch(err => console.warn(err))

        //[Error: The email address is badly formatted.]
        //[Error: There is no user record corresponding to this identifier. The user may have been deleted.]
        //[Error: The password is invalid or the user does not have a password.]
      console.log('submit')
    }
  })
)(SignIn)