import React from 'react'
import { Text, Icon, Item, Label, Input, Picker, DatePicker } from 'native-base'

const CustomInput = ({value, onChangeValue, property, error}) => {
  switch(property.type) {
    case 'text':
      return <Item error={error ? true : false}>
        <Label>{property.name}</Label>
        <Input
          value={value}
          onChangeText={newValue => onChangeValue(property.id, newValue)}
        />
        {error && <Icon name='close-circle' />}
      </Item>

    case 'number':
      return <Item error={error ? true : false}>
        <Label>{property.name}</Label>
        <Input
          value={value}
          keyboardType='number-pad'
          onChangeText={newValue => onChangeValue(property.id, newValue)}
        />
        {error && <Icon name='close-circle' />}
      </Item>

    case 'picker':
      return !property.items
        ? <Text>Items are required for picker</Text>
        : <Item error={error ? true : false}>
          <Label>{property.name}</Label>
          <Picker
            note
            mode="dropdown"
            style={{ width: undefined }}

            placeholder={property.name}
            placeholderStyle={{ color: "#d3d3d3" }}
            placeholderIconColor="#007aff"

            iosHeader={property.name}
            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}

            selectedValue={value}
            onValueChange={newValue => onChangeValue(property.id, newValue)}
          >
            <Picker.Item label='Select an item' value={null} />
            {property.items.map(item => <Picker.Item key={item.id} label={item.value} value={item.id} />)}
          </Picker>
          {error && <Icon name='close-circle' />}
        </Item>

    default:
      return <Item>
        <Text>Invalid Type</Text>
      </Item>
  }
}

export default CustomInput