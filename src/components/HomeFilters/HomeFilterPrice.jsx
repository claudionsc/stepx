import React, { useContext } from 'react'
import PricesContexts from '../contexts/prices/PricesContexts'


export const HomeFilterPrice = () => {
    
    const {prices, setPrices} = useContext(PricesContexts)
    
    const handleChange = (event) => {
        setPrices(event.target.value);
    };


    return (
        <form id='preco'>
           
            <div className="opcao">
                <input value={200} type="radio" className='preco' id='200' name='preco' onChange={handleChange} />
                <label htmlFor='200'>Até R$199</label>
            </div>
            <div className="opcao">
                <input value={500} type="radio" className='preco' id='500' name='preco' onChange={handleChange} />
                <label htmlFor='500'>Até R$499</label>
            </div>
            <div className="opcao">
                <input value={700} type="radio" className='preco' id='700' name='preco' onChange={handleChange} />
                <label htmlFor='700'>Até R$699</label>
            </div>
            <div className="opcao">
                <input value={1000} type="radio" className='preco' id='1000' name='preco' onChange={handleChange} />
            <label htmlFor='1000'>Acima de R$999</label>
            </div>
            
        </form>
    )
}
