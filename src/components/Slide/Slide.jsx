import React, { useState } from 'react'
import Item from './Item'
import Carousel, { consts } from 'react-elastic-carousel'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'


const Slide = () => {

  const breakpoints = [
    { width: 1, itemToSHow: 1 },
    { width: 550, itemToSHow: 2, itemToScroll: 2 },
    { width: 768, itemToSHow: 3 },
    { width: 1200, itemToSHow: 4 },

  ]

  const [items, setItems] = useState([1, 2, 3, 4, 5])

 

  return (


    <div className='container'>
      <div className="carousel-wrapper">
        <Carousel isRTL breakPoints={breakpoints}
        renderArrow={({ type, onClick }) => {
          const pointer = type === consts.PREV ? <MdArrowForwardIos /> : <MdArrowBackIosNew /> 
          return <button onClick={onClick}>{pointer}</button>
        }}
        >
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Slide;
