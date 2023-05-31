import React, { useState } from 'react'
import { Navbar } from '../../navbar/Navbar'
import { Cart } from '../cart/Cart'


export const Home = () => {

  const [cart, showCart] = useState(false)

  return (
    <div>
      <Navbar />
      <section id='lancamentos'>
        <h1>Lançamentos</h1>
      </section>

      <section id='vendidos'>
        <h1>Mais vendidos</h1>
      </section>

      <section id='produtos'>
        <h1>Ver produtos</h1>
      </section>
      
    </div>
  )
}
