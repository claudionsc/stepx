import React, { useState } from 'react'
import {S3DStyle} from './StyleInicio'

import { NikeShoe } from '../shoes/NikeShoe'
import { Shoe } from '../shoes/shoes3d/Shoe'



let shoe = {}
const Slide = () => {
  
  
  // const shoeArray = [<NikeShoe />, 1]
  const shoeArray = [2, 1]

  for(let i = 0; i < shoeArray.length; i++ ){
    const time = new Date()
    time.getSeconds(3)
    shoe = shoeArray[i]
    // console.log(shoe)

    // return shoe
    
  }
  
  return (

    <S3DStyle>
      {shoe}
    </S3DStyle>
  )
}

export default Slide;
