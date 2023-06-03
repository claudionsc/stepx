import React from 'react'
import { StyleCartItems } from './CartStyles'

export const CartItems = (props) => {
    return (
        <StyleCartItems key={props.key} >
            <img src={props.img} />

            <div>
                <h6>{props.title}</h6>
                <p>{props.desc}</p>
                <p>{props.price}</p>
            </div>
        </StyleCartItems>
    )
}
