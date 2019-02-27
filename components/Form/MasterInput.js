import React from 'react'
import { Text, Item } from 'native-base'
import TextInput from './TextInput'
import Switch from './Switch'
import DatePicker from './DatePicker'
import Picker from './Picker'
import PickerRelate from './PickerRelate'

const MasterInput = ({ value, onChangeValue, property, error }) => {
  const onChange = newValue => onChangeValue(property.id, newValue)
  const inputProps = {
    item:{ error, label: property.name },
    input:{ value },
  }
  
  if(property.type === 'text') {
    inputProps.input.onChangeText = onChange
    return <TextInput {...inputProps} />
  } 

  if(property.type === 'number') {
    inputProps.input.onChangeText = onChange
    inputProps.input.keyboardType = 'number-pad'
    return <TextInput {...inputProps} />
  }

  if(property.type === 'date') {
    inputProps.input.onChange = onChange
    return <DatePicker {...inputProps} />
  }

  if(property.type === 'boolean') {
    inputProps.item.style = {height:50}
    inputProps.input.onValueChange = onChange
    return <Switch {...inputProps} />
  }

  if(property.type === 'relate') {
    inputProps.input.onValueChange = onChange
    inputProps.relate = property.relate
    inputProps.showProp = property.showProp
    return <PickerRelate {...inputProps}/>
  }

  if(property.type === 'picker') {
    inputProps.items = property.items
    inputProps.showProp = property.showProp
    return <Picker {...inputProps} />
  }

  return <Item><Text>Invalid Type</Text></Item>
}

export default MasterInput