import React from 'react'
import Form from '../../components/Form'

export default CategoryForm = () => {
  return <Form
    properties={[
      {id: 'name', name: 'Name', type: 'text', isRequired: true},
      //{id: 'name2', name: 'Name', type: 'number', isRequired: true},
      //{id: 'name3', name: 'Name', type: 'picker', isRequired: true},
      //{id: 'name4', name: 'Name', type: 'date', isRequired: true},
      //{id: 'name5', name: 'Name', type: 'text', isRequired: false},
    ]}
  />
}