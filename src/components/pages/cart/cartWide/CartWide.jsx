import React, { useEffect } from 'react'
import { CWStyle } from './StyleCartWide'
import { useSelector, useDispatch } from 'react-redux'
import { cleanCart, decreaseCart, getTotals, showItems, removeItems, getSubtotal } from '../../../../store'
import { Counter } from '../../../Counter/Counter'
import { CartWideItems } from './CartWideItems'
import { BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { CartWideTitles } from './StyleCartWide'
import { CartSubTotal } from '../cartSubToltal/CartSubTotal'
import { NavbarAlt } from '../../../navbar/NavbarAlt'
import { useNavigate } from 'react-router-dom'

export const CartWide = () => {

  const cartI = useSelector((state) => state.item.cartItems)
  const cartItems = useSelector((state) => state.item)
  const dispatch = useDispatch()

  const handleAddItems = (cartItem) => {
    dispatch(showItems(cartItem))
  }

  const handleRemoveItems = (cartItem) => {
    dispatch(removeItems(cartItem))
  }


  const handleCleanCart = (cartItem) => {
    dispatch(cleanCart(cartItem))
  }

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }

  // const getSubtotal = (cartItem) => {
  //   dispatch(getSubtotal(cartItem))
  // }

  useEffect(() => {
    dispatch(getTotals())
    dispatch(getSubtotal())
  }, [cartItems, dispatch])

  const navigate = useNavigate()

  return (
    <CWStyle>
      <NavbarAlt onClickAlt={() => navigate(-1)} />

      {cartI?.length === 0 ? (
        <div className='carrinho-vazio'>
          <h5>Seu carrinho está vazio</h5>
          <Link to={'/'}><p>Comece a comprar</p></Link> 
        </div>
      ) : (
        <>
          <div>
                <CartWideTitles>
                  <p>Produto</p>
                  <p>Quantidade</p>
                  <p>Valor total</p>
                </CartWideTitles>
              {cartI?.map(cartItem => (
                <>

                  <CartWideItems
                    key={cartItem.id}
                    img={cartItem.img.img01}
                    title={`
                    ${cartItem.nome}.
                    Tamanho(s): ${cartItem.size}
                    `}
                    counter={ 
                    <Counter
                      qtd={cartItem.cartQtd}
                      onClickADD={() => handleAddItems(cartItem)}
                      onClickREMOVE={() => handleDecreaseCart(cartItem)} />
                    }
                    remove={<BiTrash onClick={() => handleRemoveItems(cartItem)} cartItem={cartItem.id} />}
                    priceUni={`R$ ${cartItem.preco}`}
                    priceParcel={`10 vezes de R$ ${((cartItem.preco * cartItem.cartQtd) / 10).toFixed(2)}`}
                    priceAmount={`R$ ${(cartItem.preco * cartItem.cartQtd).toFixed(2)}`} 
                    />
                   
                </>

              ))}
                  
            </div>
          
              <CartSubTotal subtotal={`R$ ${cartItems.cartSubtotal.toFixed(2)}`} />

        </>
      )}

    </CWStyle>
  )
}
