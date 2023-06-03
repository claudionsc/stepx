import React, { useContext, useEffect } from 'react'
import { CartContainer } from './CartStyles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import CartContext from '../../contexts/CartContext'
import { useDispatch, useSelector } from 'react-redux'
import { cleanCart, decreaseCart, getTotals, removeItems } from '../../../store'
import { CartItems } from './CartItems'
import { Button } from '../../Button/Button'

export const Cart = (props) => {

  const { cart, setCart } = useContext(CartContext);

  const cartI = useSelector((state) => state.item.cartItems)
  const cartItems = useSelector((state) => state.item)
  const dispatch = useDispatch()

  const handleRemoveItems = (cartItems) => {
    dispatch(removeItems(cartItems))
  }

  const handleCleanCart = (cartItems) => {
    dispatch(cleanCart(cartItems))
  }

  const handleDecreaseCart = (cartItems) => {
    dispatch(decreaseCart(cartItems))
  }

  useEffect(() => {
    dispatch(getTotals())
  }, [cartItems, dispatch])


  return (
    <CartContainer>
      <div><AiOutlineCloseCircle onClick={() => setCart(false)} /></div>
      <h5>Produtos no carrinho</h5>
      <div className='cart-items-div'>
        {cartI?.length === 0 ? (
          <div className='carrinho-vazio'>
            <h5>Seu carrinho está vazio</h5>
           <p onClick={() => setCart(false)}>Comece a comprar</p>
          </div>
        ) : (
          <>
            <div>
              {cartI?.map(cartItem => (
                <CartItems
                  key={cartItem.id}
                  img={cartItem.img}
                  title={cartItem.nome}
                  price={cartItem.preco} />

              ))}
            </div>
            <div className='cart-summary'>
              <Button addcart='Limpar carrinho' onClick={() => handleCleanCart(cartItems)} />
            </div>
          </>
        )}
      </div>
    </CartContainer>
  )
}
