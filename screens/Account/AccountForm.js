import React from 'react'
import Form from '../../components/Form'

const AccountForm = () => 
  <Form
    name='account'
    collection='accounts'
    properties={[
      {id: 'name', name: 'Name', type: 'text', isRequired: true, defaultValue: ''},
    ]}
  />

export default AccountForm