import React from 'react'
import { PHStyled } from './StyleProductsHome'
import { Button } from '../../../../Button/Button'
import { Link } from 'react-router-dom'

export const ProductsHome = (props) => {
    return (
        <PHStyled>
            <Link to={'/product'}>
                <img src={props.img} className='img' />
            </Link>

            <div className="desc-product-home">
                <h5>{props.nome}</h5>
                <p>{props.preço}</p>
                <Button addcart={"Adicionar ao carrinho"} />
            </div>
        </PHStyled>
    )
}
