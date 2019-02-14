import React from 'react'
import { Text, Icon, Item, Label, DatePicker, Container, Content } from 'native-base'

const CustomDatePicker = ({error, value, property, showDate, onChangeValue}) => {
  if(!value) onChangeValue(property.id, new Date())
  return <Item error={error ? true : false} fixedLabel style={{height:50}}>
    <Label>{property.name}</Label>
    <DatePicker
      defaultDate={showDate}
      minimumDate={new Date(2010, 1, 1)}
      maximumDate={new Date(2099, 12, 31)}
      locale={"en"}
      timeZoneOffsetInMinutes={undefined}
      modalTransparent={false}
      animationType={"fade"}
      androidMode={"default"}
      textStyle={{ color: "green" }}
      placeHolderTextStyle={{ color: "#d3d3d3" }}
      onDateChange={newValue => onChangeValue(property.id, newValue)}
      disabled={false}
    />
    {error && <Icon name='close-circle' />}
  </Item>
}

export default CustomDatePicker