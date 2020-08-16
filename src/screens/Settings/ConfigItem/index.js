import React from 'react'
import { StyleSheet } from 'react-native'

import { Container, Title, SubTitle } from './styles'

export default function ConfigItem(props) {
  return (
    <Container style={style.container}>
      {props.two
        ? <><Title>{props.title}</Title><SubTitle>{props.subtitle}</SubTitle></>
        : <Title style={{ color: props.red ? '#F75175' : '#fff' }}>{props.title}</Title>
      }
    </Container>
  )
}

const style = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#fff',

  }
})
