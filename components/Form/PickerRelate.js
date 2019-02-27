import React from 'react'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { Item, Text } from 'native-base'
import CustomPicker from './Picker'

const PickerRelate = ({relate, showProp, item, input}) => {
  let list = []
  let message =
    ! isLoaded(relate) ? `Loading ${item.label}`
    : isEmpty(relate) ? 'Account is empty'
    : Object.keys(relate).map(id => list.push({ ...relate[id], id}))

  return isLoaded(relate) && list.length > 0
    ? <CustomPicker showProp={showProp} item={item} input={input} items={list}/>
    : <Item>
      <Text>{message}</Text>
    </Item>
}

export default PickerRelate