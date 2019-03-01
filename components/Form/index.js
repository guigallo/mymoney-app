import React from 'react'
import { Alert } from 'react-native'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { save, deleteById } from '../../data/firestore'
import Form from './Form'

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
      const { setType, setValues, collection, properties, navigation } = this.props
      const paramType = navigation.getParam('type', {})
      if(!paramType) return console.log('Type is required')
      if(!collection) return console.log('Collection is required')
      if(!properties) return console.log('Properties is required')
      if(properties.length < 1) return console.log('Properties must be an array')
      
      setType(paramType)
      setValues(navigation.getParam('item', false) || createValues(properties))
    }
  }),
  withHandlers({
    onChangeValue: ({values, setValues, errors, setErrors, properties}) => (id, newValue) => {
      if(errors[id]) {
        let newErrors = errors
        delete newErrors[id]
        setErrors(newErrors)
      }
      model = properties.find(prop => prop.id === id)
      let newState = values
      newState[id] = model.type === 'number' ? parseFloat(newValue) : newValue
      setValues(newState)
    },
    onPressSubmit: ({values, properties, setErrors, auth, collection, navigation}) => () => {
      let newErrors = {}
      properties.forEach(property => {
        if(property.type === 'boolean') return
        if(property.isRequired && !values[property.id])
          newErrors[property.id] = `${property.name} is required`
      });

      if(Object.entries(newErrors).length > 0) return setErrors(newErrors)

      const key = values.key ? values.key : null
      save(auth, collection, values, key)
        .then(() => navigation.goBack())
        .catch(err => console.log(err))
    },
    onPressRemove: ({name, collection, values, navigation}) => () => {
      Alert.alert(
        `Confirm to delete ${name}`,
        'You cannot undo this action',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Confirm', style: 'destructive', onPress: () => deleteById(collection, values.key).then(() => navigation.pop(2)) }
        ],
        {cancelable: true}
      )
    }
  })
)(props => <Form {...props}/>)