import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Provider from './data/redux'
import LoadScreen from './screens/LoadScreen'
import AuthStack from './routes/AuthStack'
import HomeScreenRoutes from './routes/HomeScreenRoutes'

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Load: LoadScreen,
    Auth: AuthStack,
    Home: HomeScreenRoutes,
  })
)

export default App = () =>
  <Provider>
    <AppContainer/>
  </Provider>