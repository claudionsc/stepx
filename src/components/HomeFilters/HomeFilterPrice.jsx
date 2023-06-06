import React from 'react'

export const HomeFilterPrice = () => {
    return (
        <form id='preco'>
            <input type="checkbox" className='preco' id='ate100' name='ate-100'/>
            <label htmlFor='ate100'>Até R$100</label><br />
            <input type="checkbox" className='preco' id='ate200' name='ate-200'/>
            <label htmlFor='ate200'>Até R$200</label><br />
            <input type="checkbox" className='preco' id='ate300' name='ate-300'/>
            <label htmlFor='ate300'>Até R$300</label><br />
            <input type="checkbox" className='preco' id='acimade300' name='acima-300'/>
            <label htmlFor='acimade300'>Acima de R$300</label><br />
        </form>
    )
}
