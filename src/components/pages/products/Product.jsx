import React, {useContext, useEffect} from 'react'
import { PDStyle } from './StyleProduct'
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Tamanhos } from '../../FormTamanhos/Tamanhos'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import { Button } from '../../Button/Button'
import { NavCart } from '../../navbar/NavStyles'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import CartAsideContext from '../../contexts/CartAsideContext'
import { CartAside } from '../cart/cartAside/CartAside'
import { NavbarAlt } from '../../navbar/NavbarAlt'
import { useDispatch, useSelector } from 'react-redux'
import { showProducts } from '../../../store'
import { showItems } from '../../../store'


export const Product = () => {

  const { cart, setCart } = useContext(CartAsideContext);

  const dispatch = useDispatch()
  const product = useSelector((state) => state.product.product)


  // useEffect(() => {
  //   dispatch(showProducts())
  // }, [product], dispatch)

  const handleAddCart = (item) => {
    
    dispatch(showItems(item))
  }
  const cartQtd = localStorage.getItem('cartTotal')


  return (
    <PDStyle>
     <NavbarAlt cart={
     <NavCart onClick={() => setCart(true)} >
      <a className='cartQtd' count={cartQtd}><AiOutlineShoppingCart /></a>
    </NavCart>
  } />

      <section id='product'>
        <span className='product-img'>
          <img src={product.img.img01} alt={product.key} />
          <img src={product.img.img02} alt={product.key} />
          <img src={product.img.img03} alt={product.key} />
          <img src={product.img.img04} alt={product.key} />
        </span>

        <span className="product-desc">
          <div className="desc">
            <h1>{product.nome}</h1>
            <p> </p>
            <p>{`R$ ${product.preco}`}</p>

           <Tamanhos >
            {product.tamanhos.map(item => {
              return <input type="button" value={item[item]} className="tamanhos-btn" />
            })}
           </Tamanhos>
           <Button onClick={() => handleAddCart(product)} addcart={'Adicionar ao carrinho'} />
          </div>


        </span>
      </section>

      {cart === true && <CartAside />}
    </PDStyle>
  )
}
