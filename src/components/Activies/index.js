import React from 'react'
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import {
  Container,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  DescriptionDetails,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel
} from './styles'

export default function Activies({ img, pag, ben, description, value, date, comments, hearts, green }) {
  return (
    <Container>
      <Card>
        <CardHeader>
          <Avatar source={img} resizeMode='contain' />
          <Description>
            <Bold>{pag}</Bold> Pagou a <Bold>{ben}</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <DescriptionDetails>{description}</DescriptionDetails>
        </CardBody>

        <CardFooter>
          <Details>
            {green
              ? <Value style={{ color: '#0DB060' }}>{value}</Value>
              : <Value>{value}</Value>
            }
            
            <Divider />

            <Feather name='lock' color='#fff' size={14} />
            <Date>{date}</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name='comment-outline' color='#fff' size={16} />
              <OptionLabel>{comments}</OptionLabel>
            </Option>
            <Option>
              <AntDesign name='hearto' color='#fff' size={16} />
              <OptionLabel>{hearts}</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  )
}
