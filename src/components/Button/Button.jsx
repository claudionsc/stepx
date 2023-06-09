import React from 'react'
import { BTNStyled } from './StyleButton'

export const Button = (props) => {
  return (
    <BTNStyled type={props.type} disabled={props.disabled} className={props.className} onClick={props.onClick}>
      <p>{props.addcart}</p>
    </BTNStyled>
  )
}
