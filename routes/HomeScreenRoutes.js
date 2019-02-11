import HomeScreen from '../screens/HomeScreen'
import CategoriesList from '../screens/Category/CategoriesList'
import EditScreen from '../screens/EditScreen'
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation'
import CategoryForm from '../screens/Category/CategoryForm';

const HomeScreenRouter = createDrawerNavigator({
  Home: { screen: HomeScreen },

  Categories:
    createStackNavigator({
      Category: { screen: CategoriesList },
      Form: { screen: CategoryForm },
    }, { headerMode: 'none' }
  ),
})

export default createAppContainer(HomeScreenRouter)