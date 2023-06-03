import React from 'react'
import { StyleCartAsideItems } from './CartAsideStyles'

export const CartAsideItems = (props) => {
    return (
        <StyleCartAsideItems key={props.key} >
            <img src={props.img} />

            <div>
                <h6>{props.title}</h6>
                <p>{props.desc}</p>
                <p>{props.price}</p>
                <p>{props.priceParcel}</p>
            </div>
        </StyleCartAsideItems>
    )
}
