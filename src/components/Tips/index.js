import React from 'react'

import { Container, Option, Title, Img } from './styles'

export default function Tips({ data }) {
  return (
    <Container>
      {data.map(item => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  )
}
