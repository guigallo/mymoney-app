import React from 'react'
import { compose } from 'recompose'
import Form from '../../components/Form'
import withCollection from '../../hooks/withCollection'
import { TimestampNow } from '../../helpers/TimestampHelper'

const IncomeForm = ({accounts, categories}) =>
  <Form
    name='incomes'
    collection='incomes'
    properties={[
      {id: 'account',     name: 'Account',      type: 'relate',   isRequired: true, defaultValue: '', relate: accounts, showProp: 'name'},
      {id: 'category',    name: 'Category',     type: 'relate',   isRequired: true, defaultValue: '', relate: categories, showProp: 'name'},
      {id: 'date',        name: 'Date',         type: 'date',     isRequired: true, defaultValue: TimestampNow()},
      {id: 'description', name: 'Description',  type: 'text',     isRequired: true, defaultValue: ''},
      {id: 'isPaid',      name: 'Pago',         type: 'boolean',  isRequired: true, defaultValue: false},
      {id: 'value',       name: 'Value',        type: 'number',   isRequired: true, defaultValue: ''},
    ]}
  />

export default compose(
  withCollection('accounts'),
  withCollection('categories'),
)(IncomeForm)