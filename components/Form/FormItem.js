import React from 'react'
import { Icon, Item, Label } from 'native-base'

const FormItem = ({children, error, label, style}) => 
  <Item error={error ? true : false} fixedLabel style={style}>
    <Label>{label}</Label>
    {children}
    {error && <Icon name='close-circle' />}
  </Item>

export default FormItem