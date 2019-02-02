import React from 'react'
import { withNavigation } from "react-navigation"
import { View, Button, Text } from 'react-native'
import { signIn } from '../auth/withEmail'
import { TextInput } from 'react-native-gesture-handler'
import { compose, withProps, withState, withHandlers } from 'recompose'

const SignIn = ({email, password, onInputChange, onPressSignIn}) => {
  console.log('hoi',onPressSignIn)
  return <View style={style}>
    <TextInput
      placeholder="Type here to translate!"
      onChangeText={(text) => console.log(text)}
    />
    <Button
      onPress={onPressSignIn}
      title="SignIn"
      accessibilityLabel="SignIn button"
    />
  </View>
}

SignIn.navigationOptions = {
  title: 'Teste',
};

console.log('opt', SignIn.navigationOptions)

const style = {
  flex: 1,
  backgroundColor: '#ecf0f1',
  alignItems: "center",
  justifyContent: 'center'
}

export default compose(
  withNavigation,
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    onInputChange: ({setEmail, setPassword}) => (event) => {
      console.log(event)
    },
    onPressSignIn: ({email, password}) => () => {
      console.log(email)
      console.log(password)
      console.log(SignIn)
    }
  })
)(SignIn)