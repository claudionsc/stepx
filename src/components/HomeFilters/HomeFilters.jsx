import React, { useContext, useEffect } from 'react'
import { Tamanhos } from '../FormTamanhos/Tamanhos'
import { HFStyle } from './StyleHomeFilters'
import { HomeFilterPrice } from './HomeFilterPrice'
import { useState } from 'react'
import { List } from '../pages/home/sections/ProductsHome/LoadProductsHome'
import HasSizesContexts from '../contexts/hasSizes/HasSizesContexts'

const homeSizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]


export const HomeFilters = () => {

    // const [items, setItems] = useState(List)

    const { size, setSize } = useContext(HasSizesContexts)

    return (
        <HFStyle>
            <span className="filter-title">
                <p>Tamanho</p>
                <h6 onClick={() => setSize(37)}>Remover filtro</h6>
                <Tamanhos
                    sizes={homeSizes.map((item) => {
                        return <button onClick={() => setSize(item)} className="tamanhos-btn" key={item} >{item}</button>
                    })}
                />
            </span>
            <span className="filter-title">
                <p>Preço</p>
                <h6>Remover filtro</h6>
                <HomeFilterPrice />
            </span>
        </HFStyle>
    )
}
