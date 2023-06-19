import React from 'react'
import { S3DStyle } from './StyleInicio'
import { Shoe } from '../shoes/Shoe'



const Inicio = () => {


  return (
    <S3DStyle >
      <div className="home-title">
        <h1>STEPX</h1>
        <p>xpect</p>
        <p>xperience</p>
        <p>xperiment</p>
      </div>
      
      <div id="shoes1" >
        <Shoe  />
      </div>
    </S3DStyle>
  )
}

export default Inicio;
