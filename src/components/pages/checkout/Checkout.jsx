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
import { AiFillCloseCircle } from 'react-icons/ai'
import { NavbarAlt } from '../../navbar/NavbarAlt'
import  { useNavigate } from 'react-router-dom'


export const Checkout = () => {

  const navigate = useNavigate()

  const checkoutItems = useSelector((state) => state.item.cartItems)
  const checkoutSubtotal = useSelector((state) => state.item.cartSubtotal)

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [payment, setPayment] = useState('')
  const [disabledButton, setDisabledButton ] = useState(true)


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
  const handlePaymentSubmit = (e) => {
    setPayment(e.target.value)
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
      <NavbarAlt onClickAlt={() => navigate(-1)}/>
      <CKTStyle>
        <span id='dados-clientes'>

          <form action="" method="get" onSubmit={(e) => handleSubmit(e)}>

            <div className="payment" onFocus={() => setDisabledButton(false)}>
              <h4>Forma de pagamento</h4>

              <div className="inputs">
                <div className="opcao">
                  <input value="cartão" type="radio" name="pagamento" id="cartao" onChange={(e) => handlePaymentSubmit(e)} />
                  <label htmlFor="cartao">
                    <p>Cartão</p>
                    <BsCreditCard2Back />
                  </label>

                </div>
                <div className="opcao">
                  <input value="pix" type="radio" name="pagamento" id="pix" onChange={(e) => handlePaymentSubmit(e)} />
                  <label htmlFor="pix">
                    <p>Pix</p>
                    <MdOutlinePix />
                  </label>
                </div>

                <div className="opcao">
                  <input value="boleto" type="radio" name="pagamento" id="boleto" onChange={(e) => handlePaymentSubmit(e)} />
                  <label htmlFor="boleto">
                    <p>Boleto</p>
                    <RiBillLine />
                  </label>
                </div>

              </div>
            </div>

            <h4>Dados do cliente</h4>
            <input className='dados-clientes' type="text" placeholder='Email' name="email" required onChange={(e) => handleEmailSubmit(e)} />
            <input className='dados-clientes' type="text" placeholder='Nome' name="nome" required onChange={(e) => handleNameSubmit(e)} />
            <input className='dados-clientes' type="text" placeholder='Telefone' name="telefone" required onChange={(e) => handlePhoneSubmit(e)} />
            <input className='dados-clientes' type="text" placeholder='CPF' name="cpf" required onChange={(e) => handleCPFSubmit(e)} />
            <input className='dados-clientes' type="text" placeholder='Endereço' name="endereco" required onChange={(e) => handleAddressSubmit(e)} />
            <input className='dados-clientes' type="text" placeholder='Cidade' name="cidade" required onChange={(e) => handleCitySubmit(e)} />
            <input className='dados-clientes' type="text" placeholder='País' name="pais" required onChange={(e) => handleCountrySubmit(e)} />

            <Button disabled={disabledButton} addcart={"Finalizar compra"} type={"submit"} />
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
          </CIStyled>
            <CartSubTotal subtotal={`R$ ${checkoutSubtotal.toFixed(2)}`} />
        </section>

      </CKTStyle>

      {showPurchase === true &&

        <FinalCheckout>
          
          <AiFillCloseCircle onClick={() => setShowPurchase(false)} />

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

          <div className="data">
            <p>Nome: {name}</p>
            <p>Email: {email}</p>
            <p>Telefone: {phone}</p>
            <p>Endereço: {address}</p>
            <p>Forma de pagamento: {payment}</p>
          </div>
        </FinalCheckout>
      }

    </main>
  )
}
