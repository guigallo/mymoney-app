import HomeScreen from '../screens/HomeScreen'

import CategoriesList from '../screens/Category/CategoriesList'
import CategoryForm from '../screens/Category/CategoryForm'
import AccountsList from '../screens/Account/AccountsList'
import AccountForm from '../screens/Account/AccountForm'
import ExpensesList from '../screens/Expense/ExpensesList'
import ExpenseForm from '../screens/Expense/ExpenseForm'
import IncomesList from '../screens/Income/IncomesList'
import IncomeForm from '../screens/Income/IncomeForm'

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

  Incomes:
    createStackNavigator({
      Income: { screen: IncomesList },
      Form: { screen: IncomeForm },
    }, stackConfig
  ),
})

export default createAppContainer(HomeScreenRouter)