import React from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { Wrapper, Container, Header, Button, Title, BalanceContainer, BalanceTitle, Balance } from './styles'

import Suggestions from '../../components/Suggestions'
import Activies from '../../components/Activies'
import Tips from '../../components/Tips'
import Banner from '../../components/Banner'

import img8 from '../../../assets/08.png'

import img13 from '../../../assets/13.png'

import avatar from '../../../assets/avatar.png'

import { CarrouselOne, CarrouselTwo } from '../../data/Carrousel'

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

        <Title>Atividades</Title>
        <Activies 
          img={avatar}
          pag='Você'
          action='Pagou a '
          ben='@pessoa3'
          description='A divida está paga'
          value='R$ 120,00'
          date='a 1 hora'
          comments={5}
          hearts={4}
        />
        <Activies 
          img={img8}
          pag='@pessoa10'
          action='pagou a '
          ben='você'
          description='Estou pobre'
          value='R$ 600,00'
          date='1 mês atrás'
          comments={0}
          hearts={2}
          green
        />

        <Tips 
          data={CarrouselOne}
        />

        <Banner 
          title='Cobre um amigo'
          description='Mantenha suas parcerias em dia, use o PiPay para fazer suas cobranças.'
          img={img13}
        />

        <Tips 
          data={CarrouselTwo}
        />
      </Container>
    </Wrapper>
  )
}

