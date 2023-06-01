import React, { useContext } from 'react'
import { CartContainer } from './CartStyles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import CartContext from '../../contexts/CartContext'



export const Cart = () => {

  const { cart, setCart } = useContext(CartContext);

  
  return (
    <CartContainer>
      <div><AiOutlineCloseCircle onClick={() => setCart(false)}/></div>
      <h1>Carrinho</h1>
    </CartContainer>
  )
}
