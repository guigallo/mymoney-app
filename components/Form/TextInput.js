import React from 'react'
import FormItem from './FormItem'
import { Input } from 'native-base'

const TextInput = ({item, input}) => 
  <FormItem {...item}>
    <Input {...input}/>
  </FormItem>

export default TextInput