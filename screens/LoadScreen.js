import React from 'react'
import { AsyncStorage } from 'react-native'
import { compose, withState, lifecycle } from 'recompose'
import { withNavigation } from 'react-navigation'
import { Font } from 'expo'

loadFonts = new Promise(async resolve => {
  await Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  })

  resolve('font loaded')
})

loadUser = new Promise(resolve => 
  AsyncStorage.getItem('authUser').then(user => resolve(user)) )

const LoadScreen = () => <></>

export default compose(
  withNavigation,
  lifecycle({
    async componentWillMount() {
      const { navigation } = this.props
      Promise.all([loadFonts, loadUser])
        .then(result => (result[1] ? true : false)
          ? navigation.navigate('Home')
          : navigation.navigate('SignIn')
        )
    }
  })
)(LoadScreen)