import React from 'react'
import { CartContainer } from './CartStyles'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export const Cart = () => {
  return (
    <CartContainer>
      <a><AiOutlineCloseCircle /></a>
      <h1>Carrinho</h1>
    </CartContainer>
  )
}
