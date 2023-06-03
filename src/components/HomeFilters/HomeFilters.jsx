import React from 'react'
import { Tamanhos } from '../FormTamanhos/Tamanhos'
import { HFStyle } from './StyleHomeFilters'
import { HomeFilterPrice } from './HomeFilterPrice'

export const HomeFilters = () => {
    return (
        <HFStyle>
            <h1>Filtrar</h1>

            <span className="filter-title">
                <p>Tamanho</p>
                <Tamanhos />
            </span>
            <span className="filter-title">
                <p>Preço</p>
                <HomeFilterPrice />
            </span>
        </HFStyle>
    )
}
