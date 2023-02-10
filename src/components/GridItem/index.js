import React from 'react'
import * as Components from './styles'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from 'react-icons/fa'

const GridItem = ({ item, onDelete }) => {
  return (
    <Components.Tr>
      <Components.Td>{item.desc}</Components.Td>
      <Components.Td>{item.amount}</Components.Td>
      <Components.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color='red' />
        ) : (
          <FaRegArrowAltCircleUp color='green' />
        )}
      </Components.Td>
      <Components.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </Components.Td>
    </Components.Tr>
  )
}

export default GridItem