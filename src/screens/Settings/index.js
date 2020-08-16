import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

import {
  Wrapper,
  Container,
  Header,
  UserTitle,
  UserImg,
  UserId,
  UserName,
  UserPerfil,
  SubTitle,
  UserTitle2,
  TitleWrapper,
  Title
} from './styles'

import ConfigItem from './ConfigItem'

import img8 from '../../../assets/08.png'

export default function Settings() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <UserTitle>Ajuda</UserTitle>
          <UserImg source={img8} />
          <UserId>@Pessoa.pessoada14</UserId>
          <UserName>Pedro Henrique</UserName>
          <UserPerfil>
            <SubTitle>Ver meu perfil</SubTitle>
            <FontAwesome name='caret-right' size={20} color='#0DB060' />
          </UserPerfil>
          <UserTitle2>Minha conta</UserTitle2>
        </Header>

        <ConfigItem
          two
          title='Meu PicPay'
          subtitle='@pessoa.123456'
        />
        <ConfigItem
          two
          title='Meu número'
          subtitle='celular'
        />
        <ConfigItem
          two
          title='Meu E-mail'
          subtitle='pessoa***********1@g***l.com'
        />
        <ConfigItem
          two
          title='Dados pessoais'
          subtitle='Nome, CPF e data de nascimento'
        />
        <ConfigItem
          title='Conta bancária'
        />
        <ConfigItem
          title='Taxas e limites'
        />
        <ConfigItem
          title='Meus endereços'
        />
        <ConfigItem
          title='Meus favoritos'
        />
        <ConfigItem
          title='Atualizar cadastro'
        />

        <TitleWrapper>
          <Title>Promoções</Title>
        </TitleWrapper>

        <ConfigItem
          title='Usar código promocional'
        />

        <TitleWrapper>
          <Title>Minhas assinaturas</Title>
        </TitleWrapper>

        <ConfigItem
          title='Ver Minhas assinaturas'
        />

        <TitleWrapper>
          <Title>Para o meu negócio</Title>
        </TitleWrapper>

        <ConfigItem
          title='PicPay PRO'
        />
        <ConfigItem
          title='Para estabelecimento'
        />
        <ConfigItem
          title='Venda por assinaturas'
        />

        <TitleWrapper>
          <Title>Configurações</Title>
        </TitleWrapper>

        <ConfigItem
          title='Alterar senha'
        />
        <ConfigItem
          title='Privacidade'
        />
        <ConfigItem
          title='Notificações'
        />
        <ConfigItem
          title='Contas vinculadas'
        />

        <TitleWrapper>
          <Title>Geral</Title>
        </TitleWrapper>

        <ConfigItem
          title='Preciso de ajuda'
        />
        <ConfigItem
          title='Sobre o PicPay'
        />
        <ConfigItem
          title='Desativar minha conta'
        />

        <ConfigItem
          red
          margin
          title='Sair'
        />

      </Container>
    </Wrapper>
  )
}
