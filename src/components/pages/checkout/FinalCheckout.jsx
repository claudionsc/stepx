import React from 'react'
import { FCKStyle } from './StyleFinalCheckout'


export const FinalCheckout = ({children}) => {
  return (
    <FCKStyle>
      <div className="data-titles">
        <h3>Compra realizada com sucesso!</h3>
        <p>Dados da compra: </p>
      </div>

            {children}

    </FCKStyle>
  )
}
