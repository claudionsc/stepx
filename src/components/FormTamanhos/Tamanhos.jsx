import React from 'react'
import { TMStyle } from './StyleTamanhos'



export const Tamanhos = (props) => {

    return (
        <TMStyle key={props.key} >
            {props.sizes}
        </TMStyle>
    )
}
