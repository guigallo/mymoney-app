import React from 'react'
import { compose } from 'recompose';
import {
  Container, Content, Form, Text, Body, Right, Button, Icon, Title, Item, Label, Input
} from 'native-base'

const CustomInput = (property) => {
  console.log('prop', property)

  let FormatedInput
  switch(property.type) {
    case 'text':
      console.log('text')
      FormatedInput = <Input value={property.value}/>; break;
    case 'number':
      FormatedInput = <Input value={property.value} keyboardType='number-pad' />; break;
    case 'picker':
      break;
    case 'date': break;
    default: console.log('Invalid type')
  }

  console.log(FormatedInput)
  return <FormatedInput />
}

export default compose(

)(CustomInput)


export const CustomInput2 = (property) => {
  let Custom = <></>;
  switch(property.type) {
    case 'text':
      console.log('text')
      Custom = <Input value={property.value}/>; break;
    case 'number':
      Custom = <Input value={property.value} keyboardType='number-pad' />; break;
    case 'picker':
      Custom = <Picker
        mode="dropdown"
        iosIcon={<Icon name="arrow-down" />}
        style={{ width: undefined }}
        placeholder={property.name}
        placeholderStyle={{ color: "#bfc6ea" }}
        placeholderIconColor="#007aff"
        //selectedValue={this.state.selected2}
        //onValueChange={this.onValueChange2.bind(this)}
      >
        <Picker.Item label="Wallet" value="key0" />
        <Picker.Item label="ATM Card" value="key1" />
        <Picker.Item label="Debit Card" value="key2" />
        <Picker.Item label="Credit Card" value="key3" />
        <Picker.Item label="Net Banking" value="key4" />
      </Picker>;
      break;
    case 'date': break;
    default: console.log('Invalid type')
  }

  console.log('sdfasdf', Custom)
  return <Custom/>
}