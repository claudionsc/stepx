import React from 'react'
import { NavIcon, NavDiv, NavLogo, NavUl } from './NavStyles'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { TbShoe } from 'react-icons/tb'

export const Navbar = () => {
  return (
    <NavDiv>
      <NavIcon>
        <a href="#"><TbShoe /></a>
      </NavIcon>
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
      <NavIcon>
        <a><AiOutlineShoppingCart /></a>
      </NavIcon>
    </NavDiv>
  )
}
