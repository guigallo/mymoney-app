import React from 'react'
import { compose } from 'recompose'
import Form from '../../components/Form'
import withCollection from '../../hooks/withCollection';

const ExpenseForm = ({accounts, categories}) => {

  return <Form
    name='expense'
    collection='expenses'
    properties={[
      {id: 'account',     name: 'Account',      type: 'relate',   isRequired: true, relate: accounts, showProp: 'name'},
      {id: 'category',    name: 'Category',     type: 'relate',   isRequired: true, relate: categories, showProp: 'name'},
      {id: 'date',        name: 'Date',         type: 'date',     isRequired: true},
      {id: 'description', name: 'Description',  type: 'text',     isRequired: true},
      {id: 'isPaid',      name: 'Pago',         type: 'boolean',  isRequired: true},
      {id: 'value',       name: 'Value',        type: 'number',   isRequired: true},
    ]}
  />
}

export default compose(
  withCollection('accounts'),
  withCollection('categories'),
)(ExpenseForm)