import React from 'react'
import { MVStyled } from './StyleMaisVendidos.jsx'

export const MaisVendidos = (props) => {
  return (
    <MVStyled>
      <div className='img'></div>
      <h5>{props.nome}</h5>
      <p>{props.preço}</p>
    </MVStyled>
  )
}
