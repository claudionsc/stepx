import React, {useContext, useEffect} from 'react'
import { PDStyle } from './StyleProduct'
import { Tamanhos } from '../../FormTamanhos/Tamanhos'
import { Button } from '../../Button/Button'
import { NavCart } from '../../navbar/NavStyles'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import CartAsideContext from '../../contexts/CartAsideContext'
import { CartAside } from '../cart/cartAside/CartAside'
import { NavbarAlt } from '../../navbar/NavbarAlt'
import { useDispatch, useSelector } from 'react-redux'
import { showItems } from '../../../store'
import { useLocation, useNavigate } from "react-router-dom";


export const Product = () => {

  const handleClickValue = () => {
    
    console.log(`Submit vindo da Product`)
}

  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  const { cart, setCart } = useContext(CartAsideContext);

  const dispatch = useDispatch()
  const product = useSelector((state) => state.product.product)

  const handleAddCart = (item) => {
    
    dispatch(showItems(item))
  }
  const cartQtd = localStorage.getItem('cartTotal')

  const navigate = useNavigate()

  return (
    <PDStyle>
     <NavbarAlt onClickAlt={() => navigate(-1)} cart={
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

           <Tamanhos sizes={product.tamanhos.map((item) => {
              return <button onClick={() => handleClickValue()} className="tamanhos-btn" key={item} >{item}</button>
            })} />

           <Button onClick={() => handleAddCart(product)} addcart={'Adicionar ao carrinho'} />
          </div>


        </span>
      </section>

      {cart === true && <CartAside />}
    </PDStyle>
  )
}
