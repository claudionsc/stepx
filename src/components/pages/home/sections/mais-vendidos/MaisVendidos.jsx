import React from 'react'
import { MVStyled } from './StyleMaisVendidos.jsx'
import { Link } from 'react-router-dom'
import { Button } from '../../../../Button/Button.jsx'

export const MaisVendidos = (props) => {
  return (
    <MVStyled>
      <img src={props.img} alt={props.alt} />
      <h5>{props.nome}</h5>
      <p>{props.preço}</p>
      <Link to={props.Link}>
      <Button addcart={"Ver mais"} onClick={props.verPag} />
      </Link>
    </MVStyled>
  )
}
