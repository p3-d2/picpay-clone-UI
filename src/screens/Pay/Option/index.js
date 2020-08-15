import React from 'react';
import { Entypo } from '@expo/vector-icons'

import { Container, Img, Details, Title, Description, Button } from './styles'

export default function Option({ img, title, description }) {
  return (
    <Container>
      <Img source={img} />
      <Details>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Details>
      <Button>
        <Entypo name='dots-three-vertical' size={24} color='#fff' />
      </Button>
    </Container>
  )
}
