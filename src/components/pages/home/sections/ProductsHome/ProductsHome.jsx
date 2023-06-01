import React from 'react'
import { PHStyled } from './StyleProductsHome'

export const ProductsHome = (props) => {
    return (
        <PHStyled>
            <div className='img'></div>
            <h5>{props.nome}</h5>
            <p>{props.preço}</p>
        </PHStyled>
    )
}
