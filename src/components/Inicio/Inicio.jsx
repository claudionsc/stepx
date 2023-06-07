import React, { useState } from 'react'
import { S3DStyle } from './StyleInicio'

import { NikeShoe } from '../shoes/Shoe'
import { Shoe } from '../shoes/Shoe'
import { useEffect } from 'react'
import { useRef } from 'react'



const Slide = () => {


  return (
    <S3DStyle >
      <div id="shoes1" data-anime="show" >
        <Shoe />
      </div>
    </S3DStyle>
  )
}

export default Slide;
