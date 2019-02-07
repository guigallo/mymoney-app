import React from 'react'
import { AsyncStorage } from 'react-native'

const cacheResourcesAsync = async (navigation) => {
  await Expo.Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  })

  navigation.navigate(
    await AsyncStorage.getItem('authUser')
    ? 'App' : 'Auth')
}

export default LoadScreen = ({ navigation, setIsReady }) =>
  <Expo.AppLoading
    startAsync={() => cacheResourcesAsync(navigation)}
    onFinish={() => setIsReady(true)}
    onError={console.warn}
  />