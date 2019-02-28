import React from 'react'
import Form from '../../components/Form'

const CategoryForm = () => 
  <Form
    name='category'
    collection='categories'
    properties={[
      {id: 'name', name: 'Name', type: 'text', isRequired: true, defaultValue: ''},
    ]}
  />

export default CategoryForm