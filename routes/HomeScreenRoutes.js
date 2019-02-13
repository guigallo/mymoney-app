import HomeScreen from '../screens/HomeScreen'
import CategoriesList from '../screens/Category/CategoriesList'
import CategoryForm from '../screens/Category/CategoryForm'
import AccountsList from '../screens/Account/AccountsList'
import AccountForm from '../screens/Account/AccountForm'
import CameraScreen from '../screens/CameraScreen'
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation'

const HomeScreenRouter = createDrawerNavigator({
  Home: { screen: HomeScreen },

  Accounts:
    createStackNavigator({
      Account: {screen: AccountsList },
      Form: { screen: AccountForm }
    }, { headerMode: 'none' }
  ),

  Categories:
    createStackNavigator({
      Category: { screen: CategoriesList },
      Form: { screen: CategoryForm },
    }, { headerMode: 'none' }
  ),

  Camera: { screen: CameraScreen }
})

export default createAppContainer(HomeScreenRouter)