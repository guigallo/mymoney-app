import React from 'react'
import { withNavigation } from 'react-navigation'
import { StyleSheet, AsyncStorage } from 'react-native'
import {
  Container, Content, Form, Item, Input, Label, Icon, Button, Text, 
} from 'native-base';
import { signIn } from '../auth/withEmail'
import { compose, withState, withHandlers, hoistStatics, lifecycle } from 'recompose'

const SignInScreen = ({onPressSignIn, values, errors, onChangeValue}) => 
  <Container style={styles.container}>
    <Content padder>
      <Form>
        <Item stackedLabel error={errors.email}>
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
            value={values.email}
            onChangeText={value => onChangeValue('email', value)}
          />
        </Item>

        <Item stackedLabel last error={errors.password}>
          <Icon active type='MaterialIcons' name='lock' />
          <Label>Password</Label>
          <Input
            getRef={(input) => this.passwordInput = input}
            autoCapitalize='none'
            textContentType='password'
            returnKeyType='go'
            secureTextEntry={true}

            onSubmitEditing={onPressSignIn}
            value={values.password}
            onChangeText={value => onChangeValue('password', value)}
          />
        </Item>

        {(errors.email || errors.password) && <Text>{errors.message}</Text>}

        <Button block onPress={onPressSignIn} style={styles.button} >
          <Text>SignIn</Text>
        </Button>
      </Form>
    </Content>
  </Container>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: 15,
  }
})

const defaultValues = {
  email: '', password: ''
}

const defaultErrors = {
  email: false,
  password: false,
  message: '',
}

SignInScreen.navigationOptions = {
  title: 'SignIn',
};

export default hoistStatics(compose(
  withNavigation,
  withState('values', 'setValues', defaultValues),
  withState('errors', 'setErrors', defaultErrors),
  lifecycle({
    componentWillUnmount() {
      const {setValues, setErrors} = this.props
      setValues(defaultValues)
      setErrors(defaultErrors)
    }
  }),
  withHandlers({
    onChangeValue: ({setValues, setErrors}) => (field, newValue) => {
      let newValues = defaultValues
      newValues[field] = newValue
      setValues(newValues)
      setErrors(defaultErrors)
    },
    onPressSignIn: ({ navigation, values, setErrors }) => () => {
      signIn({...values})
        .then(async result => {
          await AsyncStorage.setItem('authUser', JSON.stringify(result.user))
          navigation.navigate('Home')
        })
        .catch(({ code, message }) => setErrors({
          message,
          email: code === 'auth/invalid-email' || code === 'auth/user-not-found' ? true : false,
          password: code === 'auth/wrong-password' ? true : false
        }))
    }
  })
))(SignInScreen)