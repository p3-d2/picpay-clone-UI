import React, { useState } from 'react'
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import { Switch } from 'react-native'

import {
  Container,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UserBalanceTitle
} from './styles'

export default function Header() {

  const [isVisible, setIsVisible] = useState(true)
  const [useBalance, setUseBalance] = useState(true)

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState)
  }

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <>
      <Container
        colors={
          useBalance
            ? ['#52E78C', '#1AB563']
            : ['#D3D3D3', '#868686']
        }
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? '600,00' : '------'}</Bold>
            </Value>

            <EyeButton onPress={handleToggleVisibility}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
            </EyeButton>
          </BalanceContainer>

          <Info>
            Seu saldo está rendendo 100% do CDI
          </Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name='cash' size={28} color='#fff' />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name='bank' size={20} color='#fff' />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Container>

      <UseBalance>
        <UserBalanceTitle>
          Usar saldo ao pagar
        </UserBalanceTitle>

        <Switch 
          value={useBalance}
          onValueChange={handleToggleUseBalance}
        />
      </UseBalance>
    </>
  )
}
