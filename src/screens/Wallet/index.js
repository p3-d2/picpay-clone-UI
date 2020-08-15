import React from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import Header from './Header'

import {
  Wrapper,
  Container,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel
} from './styles'

import creditCard from '../../../assets/credit-card.png'

export default function Wallet() {
  return (
    <Wrapper>
      <Container>
        <Header />

        <PaymentMethods>
          <PaymentMethodsTitle>
            Formas de pagamento
          </PaymentMethodsTitle>
          
          <Card>
            <CardBody>
              <CardDetails>
                <CardTitle>
                  Cadastre deu cartão de crédito
                </CardTitle>
                <CardInfo>
                  Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                </CardInfo>
              </CardDetails>

              <Img source={creditCard} resizeMode='contain' />
            </CardBody>
            <AddButton>
              <AntDesign name='pluscircleo' size={30} color='#0DB060' />
              <AddLabel>
                Adicionar cartão de crédito
              </AddLabel>
            </AddButton>
          </Card>

          <UseTicketContainer>
            <UseTicketButton>
              <MaterialCommunityIcons name='ticket-outline' size={20} color='#0DB060' />
              <UseTicketLabel>
                Usar código promocional
              </UseTicketLabel>
            </UseTicketButton>
          </UseTicketContainer>
        </PaymentMethods>
      </Container>
    </Wrapper>
  )
}
