import React from 'react'
import ListCollection from '../../components/ListCollection'
import { compose } from 'recompose'
import withCollection from '../../hooks/withCollection'
import { Container, Content, Text, ListItem } from 'native-base'

const ExpensesList = ({expenses}) => {
  return <ListCollection
    name={'expenses'}
    list={expenses}
    collumns={['description', 'value']} //remove
    RenderItem={RenderItem}
  />
}

const RenderItem = ({collumns, item}) => {
  console.log(collumns)
  console.log(item)
  return <Container>
    <Content style={{flex:1}}>
      <Text>{item.isPaid}</Text>
      <Text>{item.description}</Text>
      <Text>{item.category}</Text>
    </Content>
    <Content style={{justifyContent:'flex-end'}}>
      <Text>R$ {item.value.toFixed(2)}</Text>
    </Content>
  </Container>
}

export default compose(
  withCollection('expenses'),
)(ExpensesList)