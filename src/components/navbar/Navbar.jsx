import React, { useContext, useEffect, useState } from 'react'
import { NavLogo, NavDiv, NavCart, NavUl } from './NavStyles'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import CartContext from '../contexts/cartAside/CartAsideContext'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getTotals } from '../../store'
import Logo from '../assets/img/Logo/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

export const Navbar = () => {

  const dispatch = useDispatch()

  const { cart, setCart } = useContext(CartContext);

  const cartItems = useSelector((state) => state.cartItems)

  const cartQtd = useSelector((state) => state.item.cartTotal)


  useEffect(() => {
    dispatch(getTotals())
  }, [cartItems, dispatch])


  const [visible, setVisible] = useState("none")



  return (
    <NavDiv>
      <NavLogo>
        <a href="/stepx/">
          <img src={Logo} />
        </a>
      </NavLogo>

      <NavUl className={visible}>
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

      <NavCart>
        <a onClick={() => setCart(true)}><p className='cartQtd'>{cartQtd}</p><AiOutlineShoppingCart /></a>
        <div className="hamb-menu">

          {visible === "none" ? <GiHamburgerMenu onClick={() => setVisible("inline")} />
         : <IoMdClose onClick={() => setVisible("none")} />
           
          }
          
        </div>
      </NavCart>

    </NavDiv>
  )
}
