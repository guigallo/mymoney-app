import React from 'react'
import { withNavigation } from 'react-navigation';
import { View, Button, StyleSheet, AsyncStorage } from 'react-native'
import { Container, Content } from 'native-base'
import { signOut } from '../auth/withEmail'
import { compose, withHandlers, hoistStatics } from 'recompose';

//const onPressSignOut = () => signOut()

const Dashboard = ({onPressSignOut}) => {
  return <Container>
    <Content padder={true}>
      <Button
        onPress={onPressSignOut}
        title="SignOut"
        accessibilityLabel="SignIn button"
      />
    </Content>
  </Container>
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  }
})

Dashboard.navigationOptions = {
  title: 'Dashboard',
};

export default hoistStatics(compose(
  withNavigation,
  withHandlers({
    onPressSignOut: ({navigation}) => () =>
      signOut().then(async () => {
        await AsyncStorage.removeItem('authUser')
        navigation.navigate('SignIn')
      })
  })
))(Dashboard)