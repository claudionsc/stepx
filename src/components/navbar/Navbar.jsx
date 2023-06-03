import React, { useContext } from 'react'
import { NavLogo, NavDiv, NavCart, NavUl } from './NavStyles'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { TbShoe } from 'react-icons/tb'
import CartContext from '../contexts/CartContext'

export const Navbar = () => {

  const { cart, setCart } = useContext(CartContext);

  return (
      <NavDiv>
        <NavLogo>
          <a href="/"><TbShoe /></a>
        </NavLogo>
        <NavUl class="nav flex-row">
          <li class="nav-item">
            <a class="nav-link active" href="#lancamentos">Lançamentos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#vendidos">Mais vendidos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#produtos">Todos os produtos</a>
          </li>

        </NavUl>
        <NavCart onClick={() => setCart(true)} >
          <a><AiOutlineShoppingCart /></a>
        </NavCart>
      </NavDiv>
  )
}
