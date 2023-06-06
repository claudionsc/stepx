import React, { useContext, useState } from 'react'
import { Navbar } from '../../navbar/Navbar'
import CartContext from '../../contexts/CartAsideContext';
import { CartAside } from '../cart/cartAside/CartAside';
import '../../../styles/home.css'
import { MaisVendidos } from './sections/mais-vendidos/MaisVendidos';
import Inicio from '../../Inicio/Inicio';
import { List } from './sections/ProductsHome/LoadProductsHome';
import { HomeFilters } from '../../HomeFilters/HomeFilters';
import { ProductsHome } from './sections/ProductsHome/ProductsHome'
import { showItems, showProducts } from '../../../store';
import { useDispatch } from 'react-redux';

export const Home = () => {

  const [items, setItems] = useState(List)

  const { cart, setCart } = useContext(CartContext);

  const dispatch = useDispatch()

  const handleAddCart = (item) => {

    dispatch(showItems(item))
  }

  const seePag = (item) => {
    dispatch(showProducts(item))
  }

  return (
    <main id='main'>
      <Navbar />

      <section id='shoes3d' >
        <Inicio />
      </section>

      <section id='vendidos'>
        <main className='vendidos'>
          <MaisVendidos verPag={() => seePag(List[0])} nome={List[0].nome} img={List[0].img.img01} Link={`/${List[0].key}`} />
          <MaisVendidos verPag={() => seePag(List[6])} nome={List[6].nome} img={List[6].img.img01} Link={`/${List[6].key}`} />
          <MaisVendidos verPag={() => seePag(List[7])} nome={List[7].nome} img={List[7].img.img01} Link={`/${List[7].key}`} />
          <MaisVendidos verPag={() => seePag(List[8])} nome={List[8].nome} img={List[8].img.img01} Link={`/${List[8].key}`} />
        </main>
      </section>

      <section id='produtos'>
          <HomeFilters />
          <article className='products-items'>
            {items.map(item => {
              return <ProductsHome
                key={item.key}
                id={item.id}
                nome={item.nome}
                preco={`R$ ${item.preco}`}
                img={item.img.img01}
                link={`/${item.key}`}
                onClick={() => handleAddCart(item)}
                verPag={() => seePag(item)}
                addcart={"Adicionar ao carrinho"} />
            }
            )}
          </article>
      </section>

      {cart === true && <CartAside />}

    </main>
  )
}
