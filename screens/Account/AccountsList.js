import React from 'react'
import ListCollection from '../../components/ListCollection'
import { compose } from 'recompose';
import withCollection from '../../hooks/withCollection';

const AccountsList = ({accounts}) => {
  return <ListCollection
    name={'Accounts'}
    list={accounts}
    collumns={['name']}
  />
}

export default compose(
  withCollection('accounts'),
)(AccountsList)