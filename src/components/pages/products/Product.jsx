import React, {useContext} from 'react'
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
import AF01 from '../../assets/img/NikeAF01/af01.avif'


export const Product = () => {

  const { cart, setCart } = useContext(CartAsideContext);


  return (
    <PDStyle>
      <nav className='nav-product'>
        <Link to={'/'}>
          <MdArrowBackIosNew />
          <p>Voltar pra home</p>
        </Link>

        <NavCart onClick={() => setCart(true)} >
          <a><AiOutlineShoppingCart /></a>
        </NavCart>
      </nav>

      <section id='product'>
        <span className='product-img'>
          <img src={AF01} alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </span>

        <span className="product-desc">
          <div className="desc">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate animi perspiciatis quos non ex ratione qui </p>
            <p>Preço</p>

           <Tamanhos disable34={isDisabled} />
           <Button addcart={'Adicionar ao carrinho'} />
          </div>


        </span>
      </section>

      {cart === true && <CartAside />}
    </PDStyle>
  )
}
