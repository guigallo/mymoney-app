import React from 'react'
import { View, Button } from 'react-native'
import { signIn } from '../auth/withEmail'

const onPressSignIn = () => signIn('guilherme.gg1@hotmail.com', '123456')

const SignIn = () => {
  return <View>
    <Button
      onPress={onPressSignIn}
      title="SignIn"
      accessibilityLabel="SignIn button"
    />
  </View>
}

export default SignIn