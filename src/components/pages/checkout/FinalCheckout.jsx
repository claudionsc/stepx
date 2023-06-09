import React from 'react'
import { FCKStyle } from './StyleFinalCheckout'

export const FinalCheckout = ({props, children}) => {
  return (
    <FCKStyle>
        <h3>Compra realizada com sucesso!</h3>
        <p>Dados da compra: </p>

        {children}

        <div className="data">
            {children}
        </div>
       
    </FCKStyle>
  )
}
