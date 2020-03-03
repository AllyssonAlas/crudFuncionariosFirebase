import React from 'react'

import {Container, SideComponentContainer, TitleContainer, Title, Subtitle} from './styles'

export default function Header({leftComponent, title, subtitle, rightComponent}) {
  return (
    <Container>
      <SideComponentContainer>
        {leftComponent}
      </SideComponentContainer>
      <TitleContainer>
        <Title>{title}</Title>
				{subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TitleContainer>
      <SideComponentContainer>
        {rightComponent}
      </SideComponentContainer>
    </Container>
  )
}
