import React, { useState } from 'react'
import { CIStyled, CKTStyle } from './StyleCheckout'
import { BsCreditCard2Back } from 'react-icons/bs'
import { MdOutlinePix } from 'react-icons/md'
import { RiBillLine } from 'react-icons/ri'
import { Button } from '../../Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getTotals, getSubtotal } from '../../../store'
import { CartWideItems } from '../cart/cartWide/CartWideItems'
import { CartSubTotal } from '../cart/cartSubToltal/CartSubTotal'
import { FinalCheckout } from './FinalCheckout'

export const Checkout = () => {

  const checkoutItems = useSelector((state) => state.item.cartItems)
  const checkoutSubtotal = useSelector((state) => state.item.cartSubtotal)

  const [name, setName] = useState('dnjfnajnvnperj');
  const [phone, setPhone] = useState('dnjfnajnvnperj');
  const [email, setEmail] = useState('dnjfnajnvnperj');
  const [cpf, setCpf] = useState('dnjfnajnvnperj');
  const [address, setAddress] = useState('dnjfnajnvnperj');
  const [city, setCity] = useState('dnjfnajnvnperj');
  const [country, setCountry] = useState('dnjfnajnvnperj');
  const [card, setCard] = useState('dnjfnajnvnperj');
  const [pix, setPix] = useState('dnjfnajnvnperj');
  const [boleto, setBoleto] = useState('dnjfnajnvnperj');

  const [showPurchase, setShowPurchase] = useState(false)

  const handleNameSubmit = (e) => {
    setName(e.target.value)
  }
  const handlePhoneSubmit = (e) => {
    setPhone(e.target.value)
  }
  const handleEmailSubmit = (e) => {
    setEmail(e.target.value)
  }
  const handleCPFSubmit = (e) => {
    setCpf(e.target.value)
  }
  const handleAddressSubmit = (e) => {
    setAddress(e.target.value)
  }
  const handleCitySubmit = (e) => {
    setCity(e.target.value)
  }
  const handleCountrySubmit = (e) => {
    setCountry(e.target.value)
  }
  const handleCardSubmit = (e) => {
    setCard(e.target.value)
  }
  const handlePixSubmit = (e) => {
    setPix(e.target.value)
  }
  const handleBoletoSubmit = (e) => {
    setBoleto(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowPurchase(true)
    console.log(showPurchase)

  }


  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getTotals())
    dispatch(getSubtotal())
  }, [checkoutItems, dispatch])

  return (
    <main>
      <CKTStyle>
        <span id='dados-clientes'>

          <form action="" method="get" onSubmit={(e) => handleSubmit(e)}>

            <div className="payment">
              <h4>Forma de pagamento</h4>

              <div className="inputs">
                <div className="opcao">
                  <input value="cartão" type="radio" name="pagamento" id="cartao" onChange={(e) => handleCardSubmit(e)} />
                  <label htmlFor="cartao">
                    <p>Cartão</p>
                    <BsCreditCard2Back />
                  </label>

                </div>
                <div className="opcao">
                  <input value="pix" type="radio" name="pagamento" id="pix" onChange={(e) => handlePixSubmit(e)} />
                  <label htmlFor="pix">
                    <p>Pix</p>
                    <MdOutlinePix />
                  </label>
                </div>

                <div className="opcao">
                  <input value="boleto" type="radio" name="pagamento" id="boleto" onChange={(e) => handleBoletoSubmit(e)} />
                  <label htmlFor="boleto">
                    <p>Boleto</p>
                    <RiBillLine />
                  </label>
                </div>

              </div>
            </div>

            <h4>Dados do cliente</h4>
            <input type="text" placeholder='Email' name="email" required onChange={(e) => handleEmailSubmit(e)} />
            <input type="text" placeholder='Nome' name="nome" required onChange={(e) => handleNameSubmit(e)} />
            <input type="text" placeholder='Telefone' name="telefone" required onChange={(e) => handlePhoneSubmit(e)} />
            <input type="text" placeholder='CPF' name="cpf" required onChange={(e) => handleCPFSubmit(e)} />
            <input type="text" placeholder='Endereço' name="endereco" required onChange={(e) => handleAddressSubmit(e)} />
            <input type="text" placeholder='Cidade' name="cidade" required onChange={(e) => handleCitySubmit(e)} />
            <input type="text" placeholder='País' name="pais" required onChange={(e) => handleCountrySubmit(e)} />

            <Button addcart={"Finalizar compra"} type={"submit"} />
          </form>

        </span>

        <section>
          <CIStyled>

            <h3>Resumo dos pedidos</h3>
            {checkoutItems.map((item) => (

              <CartWideItems
                key={item.id}
                img={item.img.img01}
                title={`
              ${item.nome}. \n
              Tamanho(s): ${item.size}
              `}
                priceUni={`R$ ${item.preco}`}
                priceParcel={`10 vezes de R$ ${((item.preco * item.cartQtd) / 10).toFixed(2)}`}
                priceAmount={`R$ ${(item.preco * item.cartQtd).toFixed(2)}`}
              />
            ))}
            <CartSubTotal subtotal={`R$ ${checkoutSubtotal.toFixed(2)}`} />
          </CIStyled>
        </section>

      </CKTStyle>

      <FinalCheckout>
      {checkoutItems.map((item) => (
        <>
          <CartWideItems
            key={item.id}
            title={`
            ${item.nome}. \n
            Tamanho(s): ${item.size}
            `}
            priceUni={`R$ ${item.preco}`}
            />
      </>
        ))
      }
        <p>Teste</p>
      </FinalCheckout>
     
    </main>
  )
}
