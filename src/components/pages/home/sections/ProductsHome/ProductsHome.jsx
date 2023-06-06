import React from 'react'
import { PHStyled } from './StyleProductsHome'
import { Button } from '../../../../Button/Button'
import { Link } from 'react-router-dom'

export const ProductsHome = (props) => {
    
    return (
        <PHStyled id={props.id} onClick={props.verPag}  >
            <Link to={props.link} >
                <img src={props.img} className='img' />
            </Link>

            <div className="desc-product-home">
                <h5>{props.nome}</h5>
                <p>{props.preco}</p>
                <Button onClick={props.onClick} addcart={props.addcart}/>
            </div>
        </PHStyled>
    )
}
