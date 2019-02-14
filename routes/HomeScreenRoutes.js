import HomeScreen from '../screens/HomeScreen'

import CategoriesList from '../screens/Category/CategoriesList'
import CategoryForm from '../screens/Category/CategoryForm'
import AccountsList from '../screens/Account/AccountsList'
import AccountForm from '../screens/Account/AccountForm'
import CameraScreen from '../screens/CameraScreen'
import ExpensesList from '../screens/Expense/ExpensesList'
import ExpenseForm from '../screens/Expense/ExpenseForm'

import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation'

const stackConfig = {headerMode: 'none'}

const HomeScreenRouter = createDrawerNavigator({
  Home: { screen: HomeScreen },

  Accounts:
    createStackNavigator({
      Account: {screen: AccountsList },
      Form: { screen: AccountForm }
    }, stackConfig
  ),

  Categories:
    createStackNavigator({
      Category: { screen: CategoriesList },
      Form: { screen: CategoryForm },
    }, stackConfig
  ),

  Expenses:
    createStackNavigator({
      Expense: { screen: ExpensesList },
      Form: { screen: ExpenseForm },
    }, stackConfig
  ),

  Camera: { screen: CameraScreen }
})

export default createAppContainer(HomeScreenRouter)