import React from 'react'
import { TMStyle } from './StyleTamanhos'

export const Tamanhos = (props) => {
    return (
        <TMStyle>
           <input type="button" value={props.value} className="tamanhos-btn" />          
        </TMStyle>
    )
}
