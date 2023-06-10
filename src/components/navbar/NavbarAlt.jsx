import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { NavCart } from './NavStyles'
import { useContext } from 'react'
import CartAsideContext from '../contexts/cartAside/CartAsideContext'
import { NALTStyle } from './NavStyles'

export const NavbarAlt = (prop) => {

    const { cart, setCart } = useContext(CartAsideContext);
    
  return (
    <NALTStyle>
    <a onClick={prop.onClickAlt}>
      <MdArrowBackIosNew />
      <p>Voltar</p>
    </a>

    <div className='navcart'>
        {prop.cart}
    </div>
    
  </NALTStyle>
  )
}
