import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Wrapper, Container, Header, Button, Search, Title, Line } from './styles'

import Option from './Option'

import { OptionsServices, OptionsContatos } from '../../data/Options'

export default function Pay() {

  const [Value, SetValue] = useState('Quem você quer pagar?')

  return (
    <Wrapper>
      <Container>
        <Header>
          <Button>
            <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10C86E' />
          </Button>
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
