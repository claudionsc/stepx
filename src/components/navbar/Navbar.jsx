import React, { useContext, useEffect } from 'react'
import { NavLogo, NavDiv, NavCart, NavUl } from './NavStyles'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { TbShoe } from 'react-icons/tb'
import CartContext from '../contexts/cartAside/CartAsideContext'
import { useSelect } from '@react-three/drei'
import { useDispatch } from 'react-redux'
import { getTotals } from '../../store'

export const Navbar = () => {

  const { cart, setCart } = useContext(CartContext);

  const cartQtd = localStorage.getItem('cartTotal')
  const cartItems = useSelect((state) => state.cartItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cartItems, dispatch])



  return (
      <NavDiv>
        <NavLogo>
          <a href="/"><TbShoe /></a>
        </NavLogo>
        <NavUl className="nav flex-row">
          <li className="nav-item">
            <a className="nav-link active" href="#shoes3d">Início</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#vendidos">Mais vendidos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#produtos">Todos os produtos</a>
          </li>

        </NavUl>
        <NavCart >
          <a onClick={() => setCart(true)}  className='cartQtd' count={cartQtd}><AiOutlineShoppingCart /></a>
        </NavCart>
      </NavDiv>
  )
}
