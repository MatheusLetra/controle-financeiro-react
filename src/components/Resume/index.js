import React from 'react'

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from 'react-icons/fa'


import * as Components from './styles'
import ResumeItem from '../ResumeItem'


const Resume = ({ income, expense, total }) => {
  return (
    <Components.Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </Components.Container>
  )
}

export default Resume