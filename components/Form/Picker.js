import React from 'react'
import { Text, Icon, Item, Picker } from 'native-base'
import { Platform } from 'react-native'

const CustomPicker = ({showProp, item, input, items, id}) => items
  ? <Item error={Boolean(item.error)}>
    <Picker
      note
      mode="dropdown"
      style={{ width: undefined }}

      placeholder={`Select an ${item.label}`}
      placeholderStyle={{ color: "#d3d3d3" }}
      placeholderIconColor="#007aff"

      iosHeader={item.label}
      iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}

      selectedValue={input.value}
      {...input}
    >
      {Platform.OS === 'android' &&
        <Picker.Item label={`Select an ${item.label}`} value={null}/>
      }
      {items && items.map(it =>
        <Picker.Item key={it.id} label={it[showProp]} value={it.id} />
      )}
    </Picker>
  </Item>
  : <Text>Items are required for picker</Text>

export default CustomPicker