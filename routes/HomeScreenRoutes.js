import HomeScreen from '../screens/HomeScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'

const HomeScreenRouter = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Category: { screen: CategoriesScreen },
})

export default createAppContainer(HomeScreenRouter)