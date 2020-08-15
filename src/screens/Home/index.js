import React from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { Wrapper, Container, Header, Button, BalanceContainer, BalanceTitle, Balance } from './styles'

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
          <Button>
            <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10C86E' />
          </Button>

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <Button>
            <AntDesign name='gift' size={30} color='#10C86E' />
          </Button>
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

