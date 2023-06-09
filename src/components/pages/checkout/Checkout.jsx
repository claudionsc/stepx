import React from 'react'
import { CIStyled, CKTStyle } from './StyleCheckout'
import { BsCreditCard2Back } from 'react-icons/bs'
import { MdOutlinePix } from 'react-icons/md'
import { RiBillLine } from 'react-icons/ri'
import { Button } from '../../Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getTotals, getSubtotal } from '../../../store'
import { CartWideItems } from '../cart/cartWide/CartWideItems'

export const Checkout = () => {

  const checkoutItems = useSelector((state) => state.item.cartItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
    dispatch(getSubtotal())
  }, [checkoutItems, dispatch])

  return (
    <main>
      <CKTStyle>
        <span id='dados-clientes'>

          <form action="" method="get">

            <div className="payment">
              <h4>Forma de pagamento</h4>

              <div className="inputs">
                <div className="opcao">
                  <input value="cartao" type="radio" name="pagamento" id="cartao" />
                  <label htmlFor="cartao">
                    <p>Cartão</p>
                    <BsCreditCard2Back />
                  </label>

                </div>
                <div className="opcao">
                  <input value="pix" type="radio" name="pagamento" id="pix" />
                  <label htmlFor="pix">
                    <p>Pix</p>
                    <MdOutlinePix />
                  </label>
                </div>

                <div className="opcao">
                  <input value="boleto" type="radio" name="pagamento" id="boleto" />
                  <label htmlFor="boleto">
                    <p>Boleto</p>
                    <RiBillLine />
                  </label>
                </div>

              </div>
            </div>

            <h4>Dados do cliente</h4>
            <input type="text" placeholder='Email' name="email" required />
            <input type="text" placeholder='Nome' name="nome" required />
            <input type="text" placeholder='Telefone' name="telefone" required />
            <input type="text" placeholder='CPF' name="cpf" required />
            <input type="text" placeholder='Endereço' name="endereco" required />
            <input type="text" placeholder='Cidade' name="cidade" required />
            <input type="text" placeholder='País' name="pais" required />

            <Button addcart={"Finalizar compra"} type={"submit"} />
          </form>

        </span>

        <span>
          <h1>Dados das compras</h1>
          <CIStyled>
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
        </span>

      </CKTStyle>
    </main>
  )
}
