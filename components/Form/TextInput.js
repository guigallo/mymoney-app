import React from 'react'
import FormItem from './FormItem'
import { Text, Icon, Item, Label, Input, Picker, Switch } from 'native-base'

const TextInput = ({item, input}) => 
  <FormItem {...item}>
    <Input {...input}/>
  </FormItem>

export default TextInput