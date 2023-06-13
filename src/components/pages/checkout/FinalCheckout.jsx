import React from 'react'
import { FCKStyle } from './StyleFinalCheckout'
import { Link } from 'react-router-dom'


export const FinalCheckout = ({children}) => {
  return (
    <FCKStyle>
      <div className="data-titles">
      <Link to={"/stepx/"}><p>Voltar pra home</p></Link> 

        <h3>Compra realizada com sucesso!</h3>
        <p>Dados da compra: </p>
      </div>

            {children}

    </FCKStyle>
  )
}
