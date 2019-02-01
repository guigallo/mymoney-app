import React from 'react'
import { withNavigation } from "react-navigation"
import { View, Button } from 'react-native'
import { signIn } from '../auth/withEmail'
import { TextInput } from 'react-native-gesture-handler'
import { compose, withProps, withState } from 'recompose'

const onPressSignIn = () => console.log('pressed')//signIn('guilherme.gg1@hotmail.com', '123456')

const SignIn = () => {
  console.log('auth')
  return <View style={style}>
    <TextInput 
      placeholder='your@email.com'
    />
    <TextInput 
      placeholder='password'
    />
    <Button
      onPress={onPressSignIn}
      title="SignIn"
      accessibilityLabel="SignIn button"
    />
  </View>
}

const style = {
  backgroundColor: '#ecf0f1',
  alignItems: "center",
}

export default compose(
  withNavigation,
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
)(SignIn)