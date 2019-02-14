import React from 'react'
import { compose } from 'recompose'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { Text, Icon, Item, Label, Input, Picker, DatePicker, Switch } from 'native-base'
import { Platform } from 'react-native'

const PickerRelate = ({relate, error, property, onChangeValue, value, showProp}) => {
  let list = []
  let message = !isLoaded(relate)
    ? 'Loading'
    : isEmpty(relate)
      ? 'Account is empty'
      : Object.keys(relate).map(
        id => list.push({ ...relate[id], id}) )

  return <Item error={error ? true : false} fixedLabel>
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
      {(isLoaded(relate) && list.length > 0)
        ? list.map(item => <Picker.Item key={item.id} label={item[showProp]} value={item.id} />)
        : <Picker.Item label={message} value={null}/>
      }
    </Picker>
    {error && <Icon name='close-circle' />}
  </Item>
}

export default compose(
  //console.log(this),
  //withCollection({relate})
)(PickerRelate)