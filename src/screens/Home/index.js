import React from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles'

import Suggestions from '../../components/Suggestions'

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10C86E' />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <AntDesign name='gift' size={30} color='#10C86E' />
        </Header>

        <Suggestions />
      </Container>
    </Wrapper>
  )
}

