import React from 'react'

import { Wrapper, Header, UserTitle, UserImg, UserId, UserName, SubTitle } from './styles'

import img8 from '../../../assets/08.png'

export default function Settings() {
  return (
    <Wrapper>
      <Header>
        <UserTitle>Ajuda</UserTitle>
        <UserImg source={img8} />
        <UserId>@Pessoa.pessoada14</UserId>
        <UserName>Pedro Henrique</UserName>
        <SubTitle>Ver meu perfil</SubTitle>
      </Header>
    </Wrapper>
  )
}
