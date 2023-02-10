import React from 'react'
import GridItem from '../GridItem'
import * as Components from './styles'

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID)
    setItens(newArray)
    localStorage.setItem('transactions-controle-financeiro', JSON.stringify(newArray))
  }

  return (
    <Components.Table>
      <Components.Thead>
        <Components.Tr>
          <Components.Th width={40}>Descrição</Components.Th>
          <Components.Th width={40}>Valor</Components.Th>
          <Components.Th width={10} alignCenter>
            Tipo
          </Components.Th>
          <Components.Th width={10}></Components.Th>
        </Components.Tr>
      </Components.Thead>
      <Components.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </Components.Tbody>
    </Components.Table>
  )
}

export default Grid