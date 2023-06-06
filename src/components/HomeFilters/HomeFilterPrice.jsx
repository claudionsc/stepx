import React from 'react'

export const HomeFilterPrice = () => {

    
    
    return (
        <form id='preco'>
            <input type="radio" className='preco' id='todos' name='all' checked/>
            <label htmlFor='todos'>Todos os preços</label><br />
            <input type="radio" className='preco' id='ate100' name='200'/>
            <label htmlFor='ate100'>Até R$199</label><br />
            <input type="radio" className='preco' id='ate200' name='500'/>
            <label htmlFor='ate200'>Até R$499</label><br />
            <input type="radio" className='preco' id='ate300' name='700'/>
            <label htmlFor='ate300'>Até R$699</label><br />
            <input type="radio" className='preco' id='acimade300' name='1000'/>
            <label htmlFor='acimade300'>Acima de R$999</label><br />
        </form>
    )
}
