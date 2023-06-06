import React, { useContext, useState } from 'react'
import { Navbar } from '../../navbar/Navbar'
import CartContext from '../../contexts/cartAside/CartAsideContext';
import HasSizesContext from '../../contexts/hasSizes/HasSizesContexts'
import { CartAside } from '../cart/cartAside/CartAside';
import '../../../styles/home.css'
import { MaisVendidos } from './sections/mais-vendidos/MaisVendidos';
import Inicio from '../../Inicio/Inicio';
import { List } from './sections/ProductsHome/LoadProductsHome';
import { HomeFilters } from '../../HomeFilters/HomeFilters';
import { ProductsHome } from './sections/ProductsHome/ProductsHome'
import { showItems, showProducts } from '../../../store';
import { useDispatch } from 'react-redux';
import PricesContexts from '../../contexts/prices/PricesContexts';



export const Home = () => {
  
  const homeSizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
  const [items, setItems] = useState(List)


  const { cart, setCart } = useContext(CartContext);

  const { size, setSize } = useContext(HasSizesContext)

  const { prices, setPrices } = useContext(PricesContexts)

  let sizesClassName = 'true'
  



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
            {List.map(item => {

              let hasSizes = item.tamanhos.includes(size)
              let hasPrices = true

              if (prices == 200 && item.preco < prices) {
                hasPrices = true
              } else if (prices == 500 && item.preco < prices) {
                hasPrices = true
              } else if (prices == 700 && item.preco < prices) {
                hasPrices = true
              } else if (prices == 1000 && item.preco > prices) {
                hasPrices = true
              } else if (prices == 'all') {
                sizesClassName = true
              } else {
                hasPrices = false
              }

              sizesClassName = `${hasSizes && hasPrices}`

              return <ProductsHome
                className={sizesClassName}
                key={item.key}
                id={item.id}
                nome={item.nome}
                preco={`R$ ${item.preco}`}
                img={item.img.img01}
                link={`/${item.key}`}
                onClick={() => handleAddCart(item)}
                verPag={() => seePag(item)}
                 />
              }
            )}
          </article>
        </section>

        {cart === true && <CartAside />}

      </main>

  )
}
