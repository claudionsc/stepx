import React, { useContext } from 'react'
import { Navbar } from '../../navbar/Navbar'
import CartContext from '../../contexts/CartContext';
import { Cart } from '../cart/Cart';
import { ProductsHome } from './sections/ProductsHome/ProductsHome';
import '../../../styles/home.css'
import { MaisVendidos } from './sections/mais-vendidos/MaisVendidos';


export const Home = () => {

  const { cart, setCart } = useContext(CartContext);

  return (
    <main id='main'>
      <Navbar />
      <section id='lancamentos'>
        <h1>Lançamentos</h1>
      </section>

      <section id='vendidos'>
        <main className='vendidos'>

          <MaisVendidos nome={'lançamento01'} />
          <MaisVendidos nome={'lançamento02'} />
          <MaisVendidos nome={'lançamento03'} />
        </main>
      </section>

      <section id='produtos'>
        <aside className='filters'>
          <h1>Filtros</h1>
        </aside>
        <main className='products-items'>
          <ProductsHome nome={'produto02'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto01'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto03'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto04'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto05'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto06'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto07'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto08'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto09'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto10'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto11'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto12'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto13'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto14'} preço={'R$ 0,0'} />
          <ProductsHome nome={'produto15'} preço={'R$ 0,0'} />
        </main>
      </section>

      {cart === true && <Cart />}

    </main>
  )
}
