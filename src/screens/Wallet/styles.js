import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false
}))``

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`

export const PaymentMethodsTitle = styled.Text`
  text-transform: uppercase;
  color: #8E8E93;
`

export const Card = styled.View`
  background: #1E232A;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
`

export const CardBody = styled.View`
  flex-direction: row;
`

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 10px;
`

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`

export const CardInfo = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 15px;
`

export const Img = styled.Image`
  width: 70px;
`

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`

export const AddLabel = styled.Text`
  color: #0DB060;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`

export const UseTicketContainer = styled.View`
  align-items: center;
  margin: 25px 0;
`

export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
`

export const UseTicketLabel = styled.Text`
  color: #0DB060;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  text-decoration-line: underline;
`
