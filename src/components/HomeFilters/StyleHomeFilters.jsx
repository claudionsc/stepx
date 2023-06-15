import styled from "styled-components";

export const HFStyle = styled.aside`
    width: 30%;
    position: -webkit-sticky;
    position: sticky;
    top: 10%;
    left: 0;
    h6{
          cursor: pointer;
          margin: 10px;
      }   
    & p{
          border-bottom: 1px solid black;
          border-top: 1px solid black;
          padding: 10px;
          width: 90%;
      }
    & form{
          margin: 5% auto;
          width: 70%;
      }
    & #preco {
        .opcao{
      }
        input{
              accent-color: white;
              margin: 10px 10px 0 10px;
              scale: 150%;
          }
        }    
    svg{
          display: none;
      }
    @media screen and (min-width: 767px) and (max-width: 1023px){
          -webkit-backdrop-filter: blur(9.3px);
          backdrop-filter: blur(9.3px);
          background: rgba(255, 255, 255, 0.48);
          border: 1px solid rgba(255, 255, 255, 0.08);
          bottom: 0;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          height: 100vh;
          position: fixed;
          width: 50%;

        p{
              font-size: 1.8rem;
          }
        h6{
              font-size: 1.5rem;
          }
        button{
              font-size: 1.5rem;
          }
        label{
              font-size: 1.5rem;
          }
        svg{
              display: inline;
              font-size: 2.5rem;
              margin: 5px;
              position: absolute;
              right: 0%;
          }
      }
`