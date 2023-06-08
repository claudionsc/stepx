import React from 'react'
import { CSTStyle } from './StyleCartSubTotal'
import { Button } from '../../../Button/Button'
import { Link } from 'react-router-dom'

export const CartSubTotal = (props) => {
  return (
    <CSTStyle>
      <p>Subtotal: {props.subtotal}</p>
      <Link to="/purchase">
        <Button addcart={'Finalizar compra'} />
      </Link>
    </CSTStyle>
  )
}
