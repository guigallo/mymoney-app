import React from 'react'
import { withNavigation } from 'react-navigation'
import { TextInput, View } from 'react-native'
import Header from './layout/Header'
import Input from './Input'
import {
  Container, Content, Form, Text, Body, Right, Button, Icon, Title, Item, Label
} from 'native-base'

export default CustomForm = ({properties}) => {
  //console.log('properties', properties)
  return  <Container>
    <Header
      title='Create Category'
    />

    <Content padder>
      <Form>
        {properties.map(property => {
          console.log('prop312312323', property)
          return <Item stackedLabel key={property.id}>
            <Label>{property.name}</Label>
            <Input property={property}/>
          </Item>
        })}

        <Button block style={{marginTop: 15}}>
          <Text>Save</Text>
        </Button>
      </Form>
    </Content>
  </Container>
}
/*
export const CustomInput = (property) => {
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
}*/