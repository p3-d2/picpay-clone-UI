import React from 'react'

import { Container, Details, Img, Title, Description } from './styles'

export default function Banner(props) {
  return (
    <Container>
      <Details>
        <Title>{props.title}</Title>
        <Description>
          {props.description}
        </Description>
      </Details>
      <Img source={props.img} resizeMode='contain' />
    </Container>
  )
}
