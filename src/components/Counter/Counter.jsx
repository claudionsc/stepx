import React from 'react'
import { CNTStyled } from './StyleCounter'

export const Counter = (props) => {



  return (
    <CNTStyled>
      <input type="button" value='-' onClick={props.onClickREMOVE} />
      <label>
        {props.qtd}
      </label>
      <input type="button" value='+' onClick={props.onClickADD} />
    </CNTStyled>
  )
}
