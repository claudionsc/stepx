import React, { useContext, useEffect } from 'react'
import { CartAsideContainer } from './CartAsideStyles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import CartAsideContext from '../../../contexts/cartAside/CartAsideContext'
import { useDispatch, useSelector } from 'react-redux'
import { cleanCart, decreaseCart, getTotals, showItems } from '../../../../store'
import { CartAsideItems } from './CartAsideItems'
import { Button } from '../../../Button/Button'
import { Counter } from '../../../Counter/Counter'
import { Link } from 'react-router-dom'

export const CartAside = (props) => {

  const { cart, setCart } = useContext(CartAsideContext);
  const dispatch = useDispatch()

  const cartI = useSelector((state) => state.item.cartItems)
  const cartItems = useSelector((state) => state.item)


  const handleAddItems = (cartItems) => {
    dispatch(showItems(cartItems))
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
    <CartAsideContainer>
      <div><AiOutlineCloseCircle onClick={() => setCart(false)} /></div>

      <div className='cart-items-div'>

        {cartI?.length === 0 ? (
          <div className='carrinho-vazio'>
            <h3>Seu carrinho está vazio</h3>
            <p onClick={() => setCart(false)}>Comece a comprar</p>
          </div>
        ) : (
          <>
            <div>
              {cartI?.map(cartItem => (
                <>
                  <CartAsideItems
                    key={cartItem.id}
                    img={cartItem.img.img01}
                    title={cartItem.nome}
                    price={`R$ ${(cartItem.preco * cartItem.cartQtd).toFixed(2)}`}
                    priceParcel={`10 vezes de R$ ${((cartItem.preco * cartItem.cartQtd) / 10).toFixed(2)}`} />
                  <Counter
                    qtd={cartItem.cartQtd}
                    onClickADD={() => handleAddItems(cartItem)}
                    onClickREMOVE={() => handleDecreaseCart(cartItem)} />
                </>

              ))}
            </div>
            <div className='cart-summary'>
              <Link to={'/cart'}>
                <Button className='see-cart' addcart='Ver carrinho completo' />
              </Link>
              <Button addcart='Limpar carrinho' onClick={() => handleCleanCart(cartItems)} />
            </div>
          </>
        )}
      </div>

    </CartAsideContainer>
  )
}
