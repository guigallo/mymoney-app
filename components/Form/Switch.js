import React from 'react'
import FormItem from './FormItem'
import { Switch } from 'native-base'

const CustomSwitch = ({item, switchProps}) => {
  return <FormItem {...item}>
    <Switch {...switchProps}/>
  </FormItem>
}

export default CustomSwitch