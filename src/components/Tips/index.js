import React from 'react'

import { Container, Option, Title, Img } from './styles'

import img8 from '../../../assets/08.png'
import img9 from '../../../assets/09.png'
import img10 from '../../../assets/10.png'
import img11 from '../../../assets/11.png'
import img12 from '../../../assets/12.png'

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Paque suas contas sem sair de casa',
    bgColor: '#172C4A'
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Paque suas contas sem sair de casa',
    bgColor: '#6A0159'
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Paque suas contas sem sair de casa',
    bgColor: '#4139C8'
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Paque suas contas sem sair de casa',
    bgColor: '#00Ab4B'
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Paque suas contas sem sair de casa',
    bgColor: '#BA2f76'
  },
]

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  )
}
