import React from 'react'
import { BTNStyled } from './StyleButton'

export const Button = (props) => {
  return (
    <BTNStyled onClick={props.onClick}>
      {props.addcart}
    </BTNStyled>
  )
}
