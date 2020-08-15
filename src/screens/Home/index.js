import React from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { Text } from 'react-native'

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles'

import Suggestions from '../../components/Suggestions'
import Activies from '../../components/Activies'
import Tips from '../../components/Tips'
import Banner from '../../components/Banner'

import img13 from '../../../assets/13.png'

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

        <Activies />

        <Tips />

        <Banner 
          title='Cobre um amigo'
          description='Mantenha suas parcerias em dia, use o PiPay para fazer suas cobranças.'
          img={img13}
        >
        </Banner>
      </Container>
    </Wrapper>
  )
}

