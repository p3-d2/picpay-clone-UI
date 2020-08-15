import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Wrapper, Container, Header, Search, Title, Line } from './styles'

import Option from './Option'

import img1 from '../../../assets/01.png'
import img5 from '../../../assets/05.png'
import img6 from '../../../assets/06.png'
import img7 from '../../../assets/07.png'

import img8 from '../../../assets/08.png'

const OptionsServices = [
  {
    img: img5,
    title: 'Pagar Conta',
    description: 'Paque em máquinas Cielo, Getnet e Rede escaneando o Qrcode'
  },
  {
    img: img6,
    title: 'Pagar nas Maquininhas',
    description: 'Paque sua conta de luz, água, boletos bancários, etc'
  },
  {
    img: img7,
    title: 'Cobrar',
    description: 'Cobre um amigo'
  },
  {
    img: img1,
    title: 'Recarga de celular',
    description: 'Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios'
  },
]

const OptionsContatos = [
  {
    img: img8,
    title: '@pessoa1',
    description: 'nome de pessoa1'
  },
  {
    img: img8,
    title: '@pessoa2',
    description: 'nome de pessoa2'
  },
  {
    img: img8,
    title: '@pessoa3',
    description: 'nome de pessoa3'
  },
  {
    img: img8,
    title: '@pessoa4',
    description: 'nome de pessoa4'
  },
  {
    img: img8,
    title: '@pessoa5',
    description: 'nome de pessoa5'
  },
  {
    img: img8,
    title: '@pessoa6',
    description: 'nome de pessoa6'
  },
  {
    img: img8,
    title: '@pessoa7',
    description: 'nome de pessoa7'
  },
  {
    img: img8,
    title: '@pessoa8',
    description: 'nome de pessoa8'
  },
  {
    img: img8,
    title: '@pessoa9',
    description: 'nome de pessoa9'
  },
  {
    img: img8,
    title: '@pessoa10',
    description: 'nome de pessoa10'
  },
  {
    img: img8,
    title: '@pessoa11',
    description: 'nome de pessoa11'
  },
  {
    img: img8,
    title: '@pessoa12',
    description: 'nome de pessoa12'
  }
]

export default function Pay() {

  const [Value, SetValue] = useState('Quem você quer pagar?')

  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10C86E' />
          <Search
            value={Value}
            onChange={txt => SetValue(txt)}
          />
        </Header>

        <Title>Serviços</Title>

        {OptionsServices.map(item => (
          <Option 
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}

        <Line />

        <Title>Contatos</Title>

        {OptionsContatos.map(item => (
          <Option 
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}

      </Container>
    </Wrapper>
  )
}
