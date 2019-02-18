import React from 'react'
import { Text, Icon, Item, Picker } from 'native-base'
import FormItem from './FormItem'
import TextInput from './TextInput'
import Switch from './Switch'
import DatePicker from './DatePicker'
import PickerRelate from './PickerRelate'

const MasterInput = ({
  value, onChangeValue, property, error, showDate
}) => {
  switch(property.type) {
    case 'text':
      return <TextInput
        item={{error, label: property.name}}
        input={{value, onChangeText: newValue => onChangeValue(property.id, newValue)}}
      />

    case 'number':
      return <TextInput
        item={{error, label: property.name}}
        input={{
          value,
          keyboardType: 'number-pad',
          onChangeText: newValue => onChangeValue(property.id, newValue)
        }}
      />

    case 'date':
      if(value) {
        console.log('v', value)
        console.log('t', value.constructor.name === 'Timestamp')
      }
      if(!value) onChangeValue(property.id, new Date())
      return <DatePicker
          property={property}
          onChangeValue={onChangeValue}
          error={error}
          value={value}
        />

    case 'boolean':
      return <Switch
          item={{error, label: property.name, style:{height:50}}}
          switchProps={{value, onValueChange: newValue => onChangeValue(property.id, newValue)}}
        />

    case 'relate':
      return <PickerRelate
        relate={property.relate}//
        error={error}
        property={property}
        value={value}
        onChangeValue={onChangeValue}
        showProp={property.showProp}//
      />

    case 'picker':
      return property.items
        ? <FormItem error={error} label={property.name}>
          <Picker
            note
            mode="dropdown"
            style={{ width: undefined }}

            placeholder={`Select an ${property.name}`}
            placeholderStyle={{ color: "#d3d3d3" }}
            placeholderIconColor="#007aff"

            iosHeader={property.name}
            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}

            selectedValue={value}
            onValueChange={newValue => onChangeValue(property.id, newValue)}
          >
            {Platform.OS === 'android' &&
              <Picker.Item label={`Select an ${property.name}`} value={null}/>
            }
            {property.items && property.items.map(item => <Picker.Item key={item.id} label={item.value} value={item.id} />)}
          </Picker>
        </FormItem>
        : <Text>Items are required for picker</Text>

    default:
      return <Item>
        <Text>Invalid Type</Text>
      </Item>
  }
}

export default MasterInput