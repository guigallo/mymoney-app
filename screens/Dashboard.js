import React from 'react'
import { View, Button } from 'react-native'
import { signOut } from '../auth/withEmail'

const onPressSignOut = () => signOut()

const Dashboard = () => {
  return <View>
    <Button
      onPress={onPressSignOut}
      title="SignOut"
      accessibilityLabel="SignIn button"
    />
  </View>
}

export default Dashboard