import React from 'react'
import ListCollection from '../../components/ListCollection'
import { compose } from 'recompose';
import withCollection from '../../hooks/withCollection';

const ExpensesList = ({expenses}) => {
  return <ListCollection
    name={'expenses'}
    list={expenses}
    collumns={['description', 'value', 'status']}
  />
}

export default compose(
  withCollection('expenses'),
)(ExpensesList)