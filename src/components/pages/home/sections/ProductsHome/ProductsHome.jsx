import React from 'react'
import { PHStyled } from './StyleProductsHome'
import { Button } from '../../../../Button/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { showItems } from '../../../../../store/index';

export const ProductsHome = (props) => {



    
    return (
        <PHStyled key={props.key} id={props.id}>
            <Link to={'/product'}>
                <img src={props.img} className='img' />
            </Link>

            <div className="desc-product-home">
                <h5>{props.nome}</h5>
                <p>{props.preço}</p>
                <Button onClick={props.onClick} addcart={props.addcart}/>
            </div>
        </PHStyled>
    )
}
