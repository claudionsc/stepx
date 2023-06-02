import React from 'react'
import { PDStyle } from './StyleProduct'
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'

export const Product = () => {
  return (
    <PDStyle>
      <nav className='nav-product'>
        <Link to={'/'}>
          <MdArrowBackIosNew />
          <p>Voltar pra home</p>
        </Link>
      </nav>

      <section id='product'>
        <span className='product-img'>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </span>

        <span className="product-desc">
          <div className="desc">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate animi perspiciatis quos non ex ratione qui </p>
            <p>Preço</p>
            <div className="tamanhos">
              
            </div>
          </div>


        </span>
      </section>
    </PDStyle>
  )
}
