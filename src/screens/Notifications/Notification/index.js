import React from 'react';

import { Container, Content, Date, Line } from './styles';

export default function Notification({ content, date }) {
  return (
    <>
      <Container>
        <Content>{content}</Content>
        <Date>{date}</Date>
      </Container>

      <Line />
    </>
  )
}
