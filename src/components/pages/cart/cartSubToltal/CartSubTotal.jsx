import React from 'react'
import {CSTStyle} from './StyleCartSubTotal'
import { Button } from '../../../Button/Button'

export const CartSubTotal = (props) => {
  return (
    <CSTStyle>
        <p>Subtotal: {props.subtotal}</p>
        <Button addcart={'Finalizar compra'}/>
    </CSTStyle>
  )
}
