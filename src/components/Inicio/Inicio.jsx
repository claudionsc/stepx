import React, { useState } from 'react'
import { S3DStyle } from './StyleInicio'

import { NikeShoe } from '../shoes/NikeShoe'
import { Shoe } from '../shoes/shoes3d/Shoe'
import { useEffect } from 'react'
import { useRef } from 'react'



const Slide = () => {

  const shoe1 = 1
  const shoe2 = 2
  const shoe3 = 3

  const classes = useRef('true')
  
    
  useEffect(() => {

    const interval = setInterval(() => {
      classes.current = 'false'
      console.log(1)
    }, 3000);
    
  })

  


  return (
    <S3DStyle >
      <div id="shoes1" className={classes} data-anime="show" on >
        {shoe1}
      </div>
      <div id="shoes2" data-anime="show" on >
        {shoe2}
      </div>
      <div id="shoes3" data-anime="show" on >
        {shoe3}
      </div>
    </S3DStyle>
  )
}

export default Slide;
