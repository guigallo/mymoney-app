import HomeScreen from '../screens/HomeScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import EditScreen from '../screens/EditScreen'
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation'

const HomeScreenRouter = createDrawerNavigator({
  Home: { screen: HomeScreen },

  Categories:
    createStackNavigator({
      Category: { screen: CategoriesScreen },
      Edit: { screen: EditScreen },
    }, {
      initialRouteName: 'Category',
      headerMode: 'none',
    }
  ),
})

export default createAppContainer(HomeScreenRouter)