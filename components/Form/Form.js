import React from 'react'
import { Container, Content, Form, Text, Button } from 'native-base'
import Header from '../layout/Header'
import MasterInput from './MasterInput'

export default ({
  type, name, properties, onChangeValue, values, errors, onPressSubmit, onPressRemove
}) => {
  return <Container>
    <Header
      title={`${type.capitalizeFirstLetter()} ${name}`}
      remove={ type !== 'update' ? {show: false} 
        : { show: true, action: onPressRemove }
      }
    />

    <Content padder>
      <Form>
        {properties.map(property => {
          //let fieldProps = {}
          let value = values[property.id]
          
          if(property.type === 'number' && values[property.id]) value = values[property.id].toString()
          return value !== undefined && <MasterInput
              key={property.id}
              property={property}
              value={value}
              onChangeValue={onChangeValue}
              error={errors[property.id]}
              
              //{...fieldProps}
            />
        })}

        <Button block style={{marginTop: 15}} onPress={onPressSubmit}>
          <Text>{type}</Text>
        </Button>
      </Form>
    </Content>
  </Container>
}

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}