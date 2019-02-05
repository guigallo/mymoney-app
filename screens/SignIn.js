import React from 'react'
import { withNavigation } from "react-navigation"
import {
  Container, Header, Content, Form, Item, Input, Label, Icon, Button, Text, Card, CardItem, Body, 
} from 'native-base';
//import { View, Button, Text, TextInput } from 'react-native'
import { signIn } from '../auth/withEmail'
import { compose, withProps, withState, withHandlers, hoistStatics } from 'recompose'

const SignIn = ({email, password, onPressSignIn, setEmail, setPassword}) => {
  return <Container>
    <Header />
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

        <Button block onPress={onPressSignIn} >
          <Text>SignIn</Text>
        </Button>
      </Form>
    </Content>
  </Container>
}

SignIn.navigationOptions = {
  header: null
}

const style = {
  flex: 1,
  backgroundColor: '#ecf0f1',
  alignItems: "center",
  justifyContent: 'center'
}

export default hoistStatics(compose(
  withNavigation,
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    onPressSignIn: ({navigation, email, password}) => () => {
      signIn(email, password)
        .then(result => console.log(result))
        .catch(err => console.warn(err))

        //[Error: The email address is badly formatted.]
        //[Error: There is no user record corresponding to this identifier. The user may have been deleted.]
        //[Error: The password is invalid or the user does not have a password.]
      console.log('submit')
      //navigation.navigate('Dashboard')
    }
  })
))(SignIn)