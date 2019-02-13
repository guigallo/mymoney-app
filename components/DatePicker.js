import React from 'react'
import { Text, Icon, Item, Label, DatePicker } from 'native-base'

const CustomDatePicker = ({error, property, showDate, onChangeValue}) => {
  return <Item error={error ? true : false}>
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
    <Text>
      Date: {showDate && showDate.toString().substr(4, 12)}
    </Text>
  </Item>
}

export default CustomDatePicker