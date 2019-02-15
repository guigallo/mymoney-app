import React from 'react'
import ListCollection from '../../components/ListCollection'
import { compose } from 'recompose';
import withCollection from '../../hooks/withCollection';

const IncomesList = ({incomes}) => {
  return <ListCollection
    name={'incomes'}
    list={incomes}
    collumns={['description', 'value']}
  />
}

export default compose(
  withCollection('incomes'),
)(IncomesList)