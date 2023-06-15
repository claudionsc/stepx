import styled from "styled-components";

export const WStyle = styled.footer`
    width: 60vw;
    height: 15vh;
    position: fixed;
    bottom: 0;
    left: 50%;
    background: rgba( 255, 255, 255, 0.4 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9.5px );
    -webkit-backdrop-filter: blur( 9.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    transform: translate(-50%, 0%);
    text-align: center;
    animation: animation 10s normal ease-in-out;
    padding: 0 20px;
    h4, p{
          color: purple;
          font-size: .7rem;
      }
    .contatos{
          display: flex;
          justify-content: center;
          margin: 0 auto;
          width: 100%;

        svg{
              fill: purple;
              margin: 0 20px;
          }
      }
    .close{
          cursor: pointer;
          padding: 1%;
          position: absolute;
          right: 0;
          top: 0;
      }
    @keyframes animation {
        0% {
              display: none;
              opacity: 0;
          }
        25%{
              display: inline-block;
              opacity: 100%;
          }
        100%{
              display: inline-block;
              opacity: 100%;
          }
      }
    @media screen and (min-width: 767px) and (max-width: 1023px){
          height: 10vh;
          width: 90vw;

        h4{
              font-size: 2rem;
          }
        p{
              font-size: 1.2rem;
              margin-bottom: 5px;
          }
        svg{
              font-size: 1.5rem;
          }
      }
`