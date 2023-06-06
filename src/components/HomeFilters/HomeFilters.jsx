import React from 'react'
import { Tamanhos } from '../FormTamanhos/Tamanhos'
import { HFStyle } from './StyleHomeFilters'
import { HomeFilterPrice } from './HomeFilterPrice'
import { useState } from 'react'

const homeSizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]


export const HomeFilters = () => {



    const handleClickValue = () => {


        console.log(`Submit vindo da HomeFIlter`)
    }
    return (
        <HFStyle>
            <span className="filter-title">
                <p>Tamanho</p>
                <Tamanhos
                    sizes={homeSizes.map((item) => {
                        return <button onClick={() => handleClickValue()} className="tamanhos-btn" key={item} >{item}</button>
                    })}
                />
            </span>
            <span className="filter-title">
                <p>Preço</p>
                <HomeFilterPrice />
            </span>
        </HFStyle>
    )
}
