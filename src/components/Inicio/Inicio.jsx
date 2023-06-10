import React, { useState } from 'react'
import { S3DStyle } from './StyleInicio'

import { NikeShoe } from '../shoes/Shoe'
import { Shoe } from '../shoes/Shoe'
import { useEffect } from 'react'
import { useRef } from 'react'



const Inicio = () => {


  return (
    <S3DStyle >
      <div className="home-title">
        <h1>STEPX</h1>
        <h6>MOVE ON</h6>
      </div>
      <div id="shoes1" >
        {/* <Shoe /> */}
      </div>
    </S3DStyle>
  )
}

export default Inicio;
