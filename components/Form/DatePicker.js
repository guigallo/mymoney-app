import React from 'react'
import { Icon, Item, Label, DatePicker } from 'native-base'
import { TimestampFromDate } from '../../helpers/TimestampHelper'

const CustomDatePicker = ({ item, input }) =>
  <Item {...item} fixedLabel style={{height:50}}>
    <Label>{item.label}</Label>
    <DatePicker
      defaultDate={input.value.toDate()}
      onDateChange={newValue => input.onChange(TimestampFromDate(newValue))}
      {...input}

      minimumDate={new Date(2010, 1, 1)}
      maximumDate={new Date(2099, 12, 31)}
      locale={"pt-BR"}
      timeZoneOffsetInMinutes={undefined}
      modalTransparent={false}
      animationType={"fade"}
      androidMode={"default"}
      textStyle={{ color: "green" }}
      placeHolderTextStyle={{ color: "#d3d3d3" }}
      disabled={false}
    />
    {item.error && <Icon name='close-circle' />}
  </Item>

export default CustomDatePicker