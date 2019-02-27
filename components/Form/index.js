import React from 'react'
import { Container, Content, Form, Text, Button } from 'native-base'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { save } from '../../data/firestore'
import Header from '../layout/Header'
import MasterInput from './MasterInput'

const CustomForm = ({
  type, name, properties, onChangeValue, values, errors, onPressSubmit
}) => {
  return <Container>
    <Header title={`${type.capitalizeFirstLetter()} ${name}`} />

    <Content padder>
      <Form>
        {properties.map(property => {
          let fieldProps = {}
          let value = values[property.id]
          
          if(property.type === 'number' && values[property.id]) value = values[property.id].toString()
          return value !== undefined && <MasterInput
              key={property.id}
              property={property}
              value={value}
              onChangeValue={onChangeValue}
              error={errors[property.id]}
              
              {...fieldProps}
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

const createValues = properties => {
  const values = {}
  properties.forEach(property => {
    values[property.id] = property.defaultValue
  })
  return values
}

export default compose(
  withNavigation,
  connect(({ firebase: { auth } }) => ({ auth })),
  withState('isReady', 'setIsReady', false),
  withState('values', 'setValues', {}),
  withState('errors', 'setErrors', {}),
  withState('type', 'setType', ''),
  lifecycle({
    componentDidMount() {
      const {
        setType, setValues, collection, properties, navigation
      } = this.props
      if(!collection) return console.log('Collection is required')
      if(!properties) return console.log('Properties is required')
      if(properties.length < 1) return console.log('Properties must be an array')
      
      const paramType = navigation.getParam('type', {})
      setType(paramType)
      setValues(navigation.getParam('item', false) || createValues(properties))
      
      if(!paramType) return console.log('Type is required')
      if(paramType === 'update' && !paramValues) return console.log('Actual values is required to update')
    }
  }),
  withHandlers({
    onChangeValue: ({values, setValues, errors, setErrors}) => (id, newValue) => {
      if(errors[id]) {
        let newErrors = errors
        delete newErrors[id]
        setErrors(newErrors)
      }
      let newState = values
      newState[id] = newValue
      setValues(newState)
    },
    onPressSubmit: ({values, properties, setErrors, auth, collection, navigation}) => () => {
      let newErrors = {}
      properties.forEach(property => {
        if(property.isRequired && !values[property.id])
          newErrors[property.id] = `${property.name} is required`
      });

      if(Object.entries(newErrors).length > 0) return setErrors(newErrors)

      const key = values.key ? values.key : null
      save(auth, collection, values, key)
        .then(() => navigation.goBack())
        .catch(err => console.log(err))
    }
  })
)(CustomForm)