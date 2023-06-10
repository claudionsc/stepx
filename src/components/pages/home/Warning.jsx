import React from 'react'
import { WStyle } from './StyleWarning'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

export const Warning = ({children}) => {
  return (
    <WStyle>
      <span>
        <h4>Atenção</h4>
        <p>Esta aplicação é uma simulação de um ecommerce, portando <strong>não</strong> se trada de um ecommerce real. </p>
        <p>As imagens aqui mostradas são de propriedade da Nike, Adidas, Lacoste, Yeezy, New Balance e Fila, e seu uso nesse projeto é apenas para simular produtos de um ecommerce.</p>
        <p>Caso queira saber mais sobre o desenvolvedor desse projeto, visite:</p>

        <div className="contatos">
          <div >
            <a href="https://github.com/claudionsc" rel="noreferrer" target="_blank">
              <AiFillGithub />
            </a>
          </div>
          <div >
            <a href="https://www.linkedin.com/in/claudionsc/" rel="noreferrer" target="_blank">
              <AiFillLinkedin />
            </a>
          </div>
          <div >
            <a href="mailto:claudio.nsc@hotmail.com?subject=Vim pelo ecommerce!">
              <AiOutlineMail />
            </a>
          </div>
        </div>

        {children}
      </span>

    </WStyle>
  )
}
