import React from 'react'

import { Container, Option, Img, Label } from './styles.js'

import { SuggestionsItems } from '../../data/Suggestions'

export default function Suggestions() {
  return (
    <Container>
      {SuggestionsItems.map(item => (
        <Option key={item.key}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  )
}
