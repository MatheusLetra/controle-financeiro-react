import React from 'react'

import * as Components from './styles'


const ResumeItem = ({ title, Icon, value }) => {
  return (
    <Components.Container>
      <Components.Header>
        <Components.HeaderTitle>{title}</Components.HeaderTitle>
        <Icon />
      </Components.Header>
      <Components.Total>{value}</Components.Total>
    </Components.Container>
  )
}

export default ResumeItem