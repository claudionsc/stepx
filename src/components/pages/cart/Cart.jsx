import React, { useContext } from 'react'
import { CartContainer } from './CartStyles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import CartContext from '../../contexts/CartContext'
import { CartItems } from './CartItems'


export const Cart = () => {

  const { cart, setCart } = useContext(CartContext);

  
  return (
    <CartContainer>
      <div><AiOutlineCloseCircle onClick={() => setCart(false)}/></div>
      <h5>Produtos no carrinho</h5>
      <div className='cart-items-div'>
       <CartItems />
       <CartItems />
       <CartItems />
       <CartItems />
       <CartItems />
      </div>
    </CartContainer>
  )
}
