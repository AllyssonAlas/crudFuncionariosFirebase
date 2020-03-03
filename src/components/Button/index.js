import React from 'react'

import {Container, Title} from './styles'

export default function Button(props) {
  return (
    <Container {...props}>
      <Title>{props.title}</Title>
    </Container>
  )
}
