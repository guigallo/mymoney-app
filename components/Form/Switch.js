import React from 'react'
import FormItem from './FormItem'
import { Switch } from 'native-base'

const CustomSwitch = ({item, input}) =>
  <FormItem {...item}>
    <Switch {...input}/>
  </FormItem>

export default CustomSwitch