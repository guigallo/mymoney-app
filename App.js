import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import LoadScreen from './screens/LoadScreen'
import AuthStack from './routes/AuthStack'
import HomeScreenRoutes from './routes/HomeScreenRoutes'

export default createAppContainer(
  createSwitchNavigator({
    Load: LoadScreen,
    Auth: AuthStack,
    Home: HomeScreenRoutes,
  })
)