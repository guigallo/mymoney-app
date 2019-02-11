import React from 'react'
import ListCollection from '../../components/ListCollection'
import { compose } from 'recompose';
import withCollection from '../../hooks/withCollection';

const CategoriesList = ({categories}) => {
  return <ListCollection
    name={'Categories'}
    list={categories}
    collumns={['name']}
  />
}

export default compose(
  withCollection('categories'),
)(CategoriesList)