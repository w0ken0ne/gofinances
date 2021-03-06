import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import {Container, Title, Icon, Button } from './styles'

interface TransactionTypeButtonProps extends RectButtonProps{
  type: 'up'|'down';
  icon:string;
  title:string;
  isActive: boolean;
}

export function TransactionTypeButton({type, icon, title,isActive, ...rest}:TransactionTypeButtonProps){
  return (
    <Container isActive={isActive} type={type}>
      <Button {...rest} >
           <Icon type={type} name={icon} />
      <Title>{title}</Title>
      </Button>
     
      
    </Container>
  )
}